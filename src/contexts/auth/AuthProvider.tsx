import React, { PropsWithChildren, useContext, useEffect, useState } from 'react'
import { initialAxiosAuthorizationInterceptor } from '@heybro/api/client'
import { memberApi } from '@heybro/api/member'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import AuthStorage from '@heybro/storages/auth/AuthStorage'
import Config from 'react-native-config'

interface AuthState {
    isLoading: boolean
    isAuthenticated: boolean
    signInWithGoogle: () => Promise<boolean>
}

const AuthContext = React.createContext<AuthState>({} as AuthState)

export const AuthContextProvider = ({ children }: PropsWithChildren<unknown>) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const handleAuthenticate = async (idToken: string): Promise<boolean> => {
        const response = await memberApi.signIn({ idToken })
        const responseData = response.data.data
        if (responseData) {
            const { accessToken, refreshToken } = responseData
            const isSucceeded = await AuthStorage.set({ accessToken, refreshToken })
            setIsAuthenticated(isSucceeded)
            return isSucceeded
        }
        return false
    }

    const handleSignInWithGoogle = async (): Promise<boolean> => {
        const { idToken, user } = await GoogleSignin.signIn()
        if (idToken) {
            const googleCredential = auth.GoogleAuthProvider.credential(idToken)
            const credential = await auth().signInWithCredential(googleCredential)
            if (credential) {
                const idTokenResult = await auth().currentUser?.getIdTokenResult()
                const token = idTokenResult?.token
                if (token) {
                    return await handleAuthenticate(token)
                }
            }
        }
        return false
    }

    useEffect(() => {
        GoogleSignin.configure({ webClientId: Config.GOOGLE_CLIENT_ID, scopes: ['email'] })
    }, [])

    useEffect(() => {
        async function restoreToken() {
            try {
                const { accessToken, refreshToken } = await AuthStorage.get()
                if (!accessToken || !refreshToken) {
                    setIsLoading(false)
                    setIsAuthenticated(false)
                    return
                }

                const response = await memberApi.refreshToken({ refreshToken })
                const responseData = response.data.data
                if (responseData) {
                    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = responseData
                    const isSucceeded = await AuthStorage.set({
                        accessToken: newAccessToken,
                        refreshToken: newRefreshToken,
                    })
                    if (isSucceeded) {
                        initialAxiosAuthorizationInterceptor(newAccessToken)
                        setIsLoading(false)
                        setIsAuthenticated(true)
                    }
                }
            } catch (error) {
                console.error('restoreToken error', error)
                await AuthStorage.set({ accessToken: '', refreshToken: '' })
                setIsLoading(false)
                setIsAuthenticated(false)
            }
        }
        setIsLoading(true)
        restoreToken()
    }, [])

    return (
        <AuthContext.Provider value={{ isLoading, isAuthenticated, signInWithGoogle: handleSignInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
