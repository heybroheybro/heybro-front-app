import { DefaultTheme, useTheme } from 'styled-components/native'

export function useGlobalTheme() {
    return useTheme() as DefaultTheme
}
