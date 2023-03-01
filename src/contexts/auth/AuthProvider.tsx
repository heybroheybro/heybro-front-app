import React, { PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'
import { memberApi } from '@heybro/api/member'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Agreements } from '@heybro/api/agreement/types'
import auth from '@react-native-firebase/auth'
import AuthStorage from '@heybro/storages/auth/AuthStorage'
import Config from 'react-native-config'

interface AuthState {
    isLoading: boolean
    isAuthenticated: boolean
    updateAuthenticateState: () => void
    signInWithGoogle: () => Promise<boolean>
    signOut: () => Promise<void>
}

const AuthContext = React.createContext<AuthState>({} as AuthState)

export const AuthContextProvider = ({ children }: PropsWithChildren<unknown>) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const agreements = useRef<Agreements>({ term: false, event: false, privacy: false, location: false, age: false })

    const handleAuthenticate = async (idToken: string): Promise<boolean> => {
        const response = await memberApi.signIn({ idToken })
        const responseData = response.data.data
        if (responseData) {
            const { accessToken, refreshToken, agreement } = responseData
            const isSucceeded = await AuthStorage.set({ accessToken, refreshToken })
            agreements.current = agreement
            if (isSucceeded && agreement.age && agreement.privacy && agreement.term && agreement.location) {
                setIsAuthenticated(true)
            }
            return isSucceeded
        }
        return false
    }

    const handleSignInWithGoogle = async (): Promise<boolean> => {
        const { idToken } = await GoogleSignin.signIn()
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

    const handleSignOut = async (): Promise<void> => {
        await AuthStorage.clear()
        setIsAuthenticated(false)
    }

    const handleUpdateAuthenticateState = async () => {
        const { accessToken } = await AuthStorage.get()
        setIsAuthenticated(
            accessToken !== '' &&
                agreements.current.age &&
                agreements.current.privacy &&
                agreements.current.term &&
                agreements.current.location,
        )
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
        <AuthContext.Provider
            value={{
                isLoading,
                isAuthenticated,
                updateAuthenticateState: handleUpdateAuthenticateState,
                signInWithGoogle: handleSignInWithGoogle,
                signOut: handleSignOut,
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
