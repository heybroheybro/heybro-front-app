import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuthContext } from '@heybro/contexts/auth'
import { IntroNavigator } from '../intro'
import { MainNavigator } from '../main'
import { HomeNavigator } from '../home'
import { RootParamList } from '../types'
import { MyNavigator } from '../my'

const Stack = createNativeStackNavigator<RootParamList>()

export default function RootNavigator() {
    const { isAuthenticated } = useAuthContext()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="IntroNav" component={IntroNavigator} />
                {/* {!isAuthenticated && <Stack.Screen name="Intro" component={IntroNavigator} />} */}
                <Stack.Screen name="MainNav" component={MainNavigator} />
                <Stack.Screen name="HomeNav" component={HomeNavigator} />
                <Stack.Screen name="MyNav" component={MyNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
