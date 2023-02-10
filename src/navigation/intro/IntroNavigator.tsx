import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IntroParamList } from '../types'
import { SignInScreen } from '@heybro/screens/SignInScreen'
import { TermsScreen } from '@heybro/screens/TermsScreen'

const Stack = createNativeStackNavigator<IntroParamList>()

export function IntroNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Terms" component={TermsScreen} />
        </Stack.Navigator>
    )
}
