import React from 'react'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '@heybro/screens/HomeScreen'
import { MainTabBar } from './MainTabBar'
import { MainParamList } from '../types'
import { MyNavigator } from '../my'

const Stack = createBottomTabNavigator<MainParamList>()

export function MainNavigator() {
    const renderTabBar = (props: BottomTabBarProps) => {
        return <MainTabBar {...props} />
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notification" component={HomeScreen} />
            <Stack.Screen name="My" component={MyNavigator} />
        </Stack.Navigator>
    )
}
