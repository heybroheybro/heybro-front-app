import React from 'react'
import { View } from 'react-native'
import { useIntl } from 'react-intl'
import { Footer } from '@heybro/components/Footer'
import { ScreenView } from '@heybro/components/ScreenView'
import { Terms } from './components/Terms'
import { TermsProvider, useTermsContext } from '@heybro/contexts/terms'
import { WrappedFooter, WrappedScreenView } from './styles'
import { useGetAgreement, useUpdateAgreements } from '@heybro/api/agreement'
import { useAuthContext } from '@heybro/contexts/auth'

function TermsScreen() {
    const intl = useIntl()
    const { updateAuthenticateState } = useAuthContext()
    const { requiredAllAgreed, terms } = useTermsContext()
    const { mutateAsync: updateAgreements } = useUpdateAgreements()

    const handleSubmit = async () => {
        await updateAgreements({
            age: terms[0].checked,
            term: terms[1].checked,
            privacy: terms[2].checked,
            location: terms[3].checked,
            event: terms[4].checked,
        })
        updateAuthenticateState()
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

export default function WrappedTermsScreen() {
    const { data: agreements } = useGetAgreement()
    return (
        <TermsProvider
            agreements={
                agreements?.data.data || { age: false, term: false, privacy: false, location: false, event: false }
            }>
            <TermsScreen />
        </TermsProvider>
    )
}
