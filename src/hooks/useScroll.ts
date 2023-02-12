import { useEffect, useRef } from 'react'
import { useGlobalTheme } from './useGlobalTheme'
import Animated, { SharedValue } from 'react-native-reanimated'

type UseScrollParams = {
    value: SharedValue<number>
    pageLength: number
    autoPlay?: boolean
    playInterval?: number
}

export function useScroll({ value, pageLength, autoPlay = true, playInterval = 3000 }: UseScrollParams) {
    const ref = useRef<Animated.ScrollView>(null)
    const { size } = useGlobalTheme()

    useEffect(() => {
        if (!autoPlay) return

        const eventLoop = setInterval(() => {
            const nextPos = value.value < size.width * (pageLength - 1) ? value.value + size.width : 0
            ref.current?.scrollTo({ x: nextPos })
        }, playInterval)

        return () => clearInterval(eventLoop)
    }, [value, size, pageLength, autoPlay, playInterval])

    return ref
}
