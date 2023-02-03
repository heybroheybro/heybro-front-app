import React, { PropsWithChildren, useContext, useEffect, useState } from 'react'
import AuthStorage from '@heybro/storages/auth/AuthStorage'
import { initialAxiosAuthorizationInterceptor } from '@heybro/api/client'
import { memberApi } from '@heybro/api/member'

interface AuthState {
    isLoading: boolean
}

const DEFAULT_VALUE = {
    isLoading: true,
}

const AuthContext = React.createContext<AuthState>(DEFAULT_VALUE)

export const AuthContextProvider = ({ children }: PropsWithChildren<unknown>) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        async function restoreToken() {
            try {
                const { accessToken, refreshToken } = await AuthStorage.get()
                if (!accessToken || !refreshToken) {
                    setIsLoading(false)
                    return
                }

                const response = await memberApi.refreshToken({ refreshToken })
                const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data
                await AuthStorage.set({ accessToken: newAccessToken, refreshToken: newRefreshToken })
                initialAxiosAuthorizationInterceptor(newAccessToken)
                setIsLoading(false)
            } catch (error) {
                console.error('restoreToken error', error)
                await AuthStorage.set({ accessToken: null, refreshToken: null })
                setIsLoading(false)
            }
        }
        setIsLoading(true)
        restoreToken()
    }, [])

    return <AuthContext.Provider value={{ isLoading }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
