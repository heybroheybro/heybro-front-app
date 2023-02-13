import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MainTabBarContainer } from './styles'

const ICONS = [
    {
        active: require('@heybro/assets/images/ic-home-active.png'),
        inactive: require('@heybro/assets/images/ic-home-inactive.png'),
    },
    {
        active: require('@heybro/assets/images/ic-notification-active.png'),
        inactive: require('@heybro/assets/images/ic-notification-inactive.png'),
    },
    {
        active: require('@heybro/assets/images/ic-my-active.png'),
        inactive: require('@heybro/assets/images/ic-my-inactive.png'),
    },
]

export function MainTabBar({ state, navigation }: BottomTabBarProps) {
    const { bottom } = useSafeAreaInsets()

    const handlePress = (target: string, name: string, isFocused: boolean) => {
        const event = navigation.emit({
            type: 'tabPress',
            target,
            canPreventDefault: true,
        })

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(name)
        }
    }

    return (
        <MainTabBarContainer style={{ paddingBottom: bottom || 10 }}>
            {state.routes.map(({ key, name }, index) => {
                const isFocused = state.index === index
                const icon = isFocused ? ICONS[index].active : ICONS[index].inactive

                return (
                    <TouchableOpacity key={key} activeOpacity={0.8} onPress={() => handlePress(key, name, isFocused)}>
                        <Image source={icon} />
                    </TouchableOpacity>
                )
            })}
        </MainTabBarContainer>
    )
}
