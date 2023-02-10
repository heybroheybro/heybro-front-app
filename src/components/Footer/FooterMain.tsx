import React from 'react'
import { ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FooterWrapper } from './styles'

export function FooterMain({ children, style }: ViewProps) {
    const { bottom } = useSafeAreaInsets()
    return <FooterWrapper style={[{ paddingBottom: bottom ?? 10 }, style]}>{children}</FooterWrapper>
}
