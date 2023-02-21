import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeParamList } from '../types'
import { SearchCityScreen } from '@heybro/screens/SearchCityScreen'

const Stack = createNativeStackNavigator<HomeParamList>()

export function HomeNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SearchCity" component={SearchCityScreen} />
        </Stack.Navigator>
    )
}
