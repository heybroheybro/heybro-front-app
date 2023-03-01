import React from 'react'
import { useGlobalTheme } from '@heybro/hooks/useGlobalTheme'
import { View, ViewProps } from 'react-native'
import { DefaultTheme } from 'styled-components/native'

type Props = {
    color?: keyof DefaultTheme['colors']
    direction: 'row' | 'column'
    size?: number
} & ViewProps

export function Divider({ color = 'white', direction, size = 8, style }: Props) {
    const { colors } = useGlobalTheme()
    const { width, height } =
        direction === 'column'
            ? {
                  width: size,
                  height: '100%',
              }
            : {
                  width: '100%',
                  height: size,
              }
    return <View style={[{ backgroundColor: colors[color], width, height }, style]} />
}
