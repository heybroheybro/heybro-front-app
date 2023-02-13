import React from 'react'
import { ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HorizontalPaddingSize, ScreenViewWrapper } from './styles'

type Props = {
    type?: 'none' | 'top' | 'bottom' | 'all'
    horizontalPadding?: HorizontalPaddingSize
} & ViewProps

export function ScreenViewMain({ type = 'none', style, horizontalPadding = '0', children, ...props }: Props) {
    const { top, bottom } = useSafeAreaInsets()
    const paddingTop = type === 'all' || type === 'top' ? top : 0
    const paddingBottom = type === 'all' || type === 'bottom' ? bottom || 10 : 0

    return (
        <ScreenViewWrapper
            style={[{ paddingTop, paddingBottom }, style]}
            horizontalPadding={horizontalPadding}
            {...props}>
            {children}
        </ScreenViewWrapper>
    )
}
