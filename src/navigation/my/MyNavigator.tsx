import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SettingsScreen } from '@heybro/screens/SettingsScreen'
import { AccountScreen } from '@heybro/screens/AccountScreen'
import { MyParamList } from '../types'

const Stack = createNativeStackNavigator<MyParamList>()

export function MyNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
    )
}
