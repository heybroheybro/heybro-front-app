import React from 'react'
import { View } from 'react-native'
import { useIntl } from 'react-intl'
import { Footer } from '@heybro/components/Footer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { IntroParamList, RootParamList } from '@heybro/navigation/types'
import { ScreenView } from '@heybro/components/ScreenView'
import { Terms } from './components/Terms'
import { TermsProvider, useTermsContext } from '@heybro/contexts/terms'
import { WrappedFooter, WrappedScreenView } from './styles'

type Props = CompositeScreenProps<
    NativeStackScreenProps<RootParamList>,
    NativeStackScreenProps<IntroParamList, 'Terms'>
>

function TermsScreen({ navigation }: Props) {
    const intl = useIntl()
    const { requiredAllAgreed } = useTermsContext()

    const handleSubmit = () => {
        navigation.navigate('MainNav', { screen: 'Home' })
    }

    return (
        <WrappedScreenView type="top" horizontalPadding="24">
            <ScreenView.Title type="h2" font="NOTO-SANS" isBold color="lightBlack">
                {intl.formatMessage({ id: '@TERMS-001' })}
            </ScreenView.Title>
            <View>
                <Terms />
                <WrappedFooter>
                    <Footer.Button type="next" onPress={handleSubmit} disabled={!requiredAllAgreed} />
                </WrappedFooter>
            </View>
        </WrappedScreenView>
    )
}

export default function WrappedTermsScreen(props: Props) {
    return (
        <TermsProvider>
            <TermsScreen {...props} />
        </TermsProvider>
    )
}
