import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IntroNavigator } from '../intro'
import { MainNavigator } from '../main'
import { HomeNavigator } from '../home'
import { RootParamList } from '../types'
import { MyNavigator } from '../my'
import { useAuthContext } from '@heybro/contexts/auth'

const Stack = createNativeStackNavigator<RootParamList>()

export default function RootNavigator() {
    const { isAuthenticated } = useAuthContext()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="IntroNav" screenOptions={{ headerShown: false }}>
                {!isAuthenticated && <Stack.Screen name="IntroNav" component={IntroNavigator} />}
                <Stack.Group navigationKey={isAuthenticated ? 'user' : 'guest'}>
                    <Stack.Screen name="MainNav" component={MainNavigator} />
                    <Stack.Screen name="HomeNav" component={HomeNavigator} />
                    <Stack.Screen name="MyNav" component={MyNavigator} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
