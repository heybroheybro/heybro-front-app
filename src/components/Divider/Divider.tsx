import React from 'react'
import { View, ViewProps } from 'react-native'

type Props = {
    color?: string
    direction: 'row' | 'column'
} & ViewProps

export function Divider({ color, direction, style }: Props) {
    const { width, height } =
        direction === 'column'
            ? {
                  width: 8,
                  height: '100%',
              }
            : {
                  width: '100%',
                  height: 8,
              }
    return <View style={[{ backgroundColor: color, width, height }, style]} />
}
