import React from 'react'
import { ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScreenViewWrapper } from './styles'

type Props = {
    type?: 'none' | 'top' | 'bottom' | 'all'
} & ViewProps

export function ScreenView({ type = 'none', style, children, ...props }: Props) {
    const { top, bottom } = useSafeAreaInsets()
    const paddingTop = type === 'all' || type === 'top' ? top : 0
    const paddingBottom = type === 'all' || type === 'bottom' ? bottom ?? 10 : 0

    return (
        <ScreenViewWrapper style={[{ paddingTop, paddingBottom }, style]} {...props}>
            {children}
        </ScreenViewWrapper>
    )
}
