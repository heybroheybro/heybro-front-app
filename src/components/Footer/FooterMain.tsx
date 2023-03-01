import React from 'react'
import { ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FooterWrapper } from './styles'

interface Props extends ViewProps {
    hasTopBorder?: boolean
}

export function FooterMain({ children, hasTopBorder = false, style }: Props) {
    const { bottom } = useSafeAreaInsets()
    return (
        <FooterWrapper hasTopBorder={hasTopBorder} style={[{ paddingBottom: bottom || 10 }, style]}>
            {children}
        </FooterWrapper>
    )
}
