import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootParamList } from '../types'
import { IntroNavigator } from '../intro'
import { MainNavigator } from '../main'
import { useAuthContext } from '@heybro/contexts/auth'

const Stack = createNativeStackNavigator<RootParamList>()

export default function RootNavigator() {
    const { isAuthenticated } = useAuthContext()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isAuthenticated && <Stack.Screen name="Intro" component={IntroNavigator} />}
                <Stack.Screen name="Main" component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
