import React from 'react'
import { StyleSheet } from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'
import Animated, { interpolate, SharedValue, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated'

type Props = {
    dotArray: number[]
    xPos: SharedValue<number>
    currentIndex: number
}

export function Dot({ dotArray, xPos, currentIndex }: Props) {
    const { size } = useTheme() as DefaultTheme
    const currentPageIndex = useDerivedValue(() => xPos.value / size.width, [xPos])

    const animatedStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            currentPageIndex.value,
            dotArray.map((_, index) => index),
            dotArray.map((_, key) => (key === currentIndex ? 1 : 0.2)),
        )
        return { opacity }
    })
    return <Animated.View style={[styles.dot, animatedStyle]} />
}

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        backgroundColor: '#fff',
        borderRadius: 999,
        marginHorizontal: 3,
    },
})
