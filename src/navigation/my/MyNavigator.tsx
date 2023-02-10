import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SettingScreen } from '@heybro/screens/SettingScreen'
import { MyParamList } from '../types'

const Stack = createNativeStackNavigator<MyParamList>()

export function MyNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
    )
}
