import React from 'react'
import { Appearance } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { getGlobalTheme } from '@heybro/utils/theme'
import { AuthContextProvider, useAuthContext } from '@heybro/contexts/auth'
import { IntlProvider } from '@heybro/contexts/intl'
import { QueryProvider } from '@heybro/contexts/query'
import RootNavigator from '@heybro/navigation/root'

const App = () => {
    const systemTheme = Appearance.getColorScheme()
    const globalTheme = getGlobalTheme(systemTheme)
    const { isLoading } = useAuthContext()
    if (isLoading) return null // TODO Change to Splash page

    return (
        <ThemeProvider theme={globalTheme}>
            <QueryProvider>
                <IntlProvider>
                    <RootNavigator />
                </IntlProvider>
            </QueryProvider>
        </ThemeProvider>
    )
}

const AppWrapper = () => (
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
)

export default AppWrapper
