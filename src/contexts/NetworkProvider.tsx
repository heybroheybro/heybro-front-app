import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

interface NetworkContextState {
    networkConnected: boolean
}

const NetworkContext = createContext<NetworkContextState>({ networkConnected: false })

export const NetworkProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [networkConnected, setNetworkConnected] = useState(false)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setNetworkConnected(state.isConnected === true)
            console.warn('NETWORK', state)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return <NetworkContext.Provider value={{ networkConnected }}>{children}</NetworkContext.Provider>
}

export const useNetworkContext = () => useContext(NetworkContext)
