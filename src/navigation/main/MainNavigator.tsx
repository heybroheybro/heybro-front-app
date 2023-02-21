import React from 'react'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { MainTabBar } from './MainTabBar'
import { MainParamList } from '../types'
import { ScreenView } from '@heybro/components/ScreenView'
import { HomeScreen } from '@heybro/screens/HomeScreen'
import { MyScreen } from '@heybro/screens/MyScreen'

const Stack = createBottomTabNavigator<MainParamList>()

export function MainNavigator() {
    const renderTabBar = (props: BottomTabBarProps) => {
        return <MainTabBar {...props} />
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notification" component={ScreenView} />
            <Stack.Screen name="My" component={MyScreen} />
        </Stack.Navigator>
    )
}
