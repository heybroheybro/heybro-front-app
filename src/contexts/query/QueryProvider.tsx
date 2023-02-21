import React, { useState, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const QueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [client] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 2,
                        refetchOnMount: true,
                        refetchOnReconnect: true,
                        refetchOnWindowFocus: true,
                        refetchInterval: 2 * 60 * 1000,
                    },
                },
            }),
    )

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
