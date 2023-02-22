import React from 'react'
import { Platform } from 'react-native'
import { OnBoarding } from './components/OnBoarding'
import { LoginButton } from './components/LoginButton'
import { TakeALookButton } from './components/TakeALookButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { IntroParamList, RootParamList } from '@heybro/navigation/types'
import { CompositeScreenProps } from '@react-navigation/native'
import { useAuthContext } from '@heybro/contexts/auth'
import { ButtonContainer, WrappedScreenView } from './styles'

type Props = CompositeScreenProps<
    NativeStackScreenProps<RootParamList>,
    NativeStackScreenProps<IntroParamList, 'SignIn'>
>

export function SignInScreen({ navigation }: Props) {
    const { signInWithGoogle } = useAuthContext()

    const handleLogin = async (type: 'google' | 'apple') => {
        if (type === 'google') {
            const isSucceeded = await signInWithGoogle()
            if (isSucceeded) navigation.navigate('Terms')
            else console.error('failed to sign in with google')
        }
    }

    const handleTakeALook = () => {
        navigation.navigate('MainNav', { screen: 'Home' })
    }

    return (
        <WrappedScreenView type="all">
            <TakeALookButton onPress={handleTakeALook} />
            <OnBoarding />
            <ButtonContainer>
                {Platform.OS === 'ios' && (
                    <LoginButton type="apple" style={{ marginBottom: 10 }} onPress={() => handleLogin('apple')} />
                )}
                <LoginButton type="google" onPress={() => handleLogin('google')} />
            </ButtonContainer>
        </WrappedScreenView>
    )
}
