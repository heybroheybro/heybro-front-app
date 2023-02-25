import React from 'react'
import { useIntl } from 'react-intl'
import { View } from 'react-native'
import { useTermsContext } from '@heybro/contexts/terms'
import { TermsItem } from './TermsItem'
import { CheckListItem } from '../CheckListItem'
import { WrappedDivider } from './styles'

export function Terms() {
    const intl = useIntl()
    const { terms, allAgreed, updateAllAgreementState, updateAgreement } = useTermsContext()

    return (
        <View>
            {terms.map(({ boldText, text, required, checked }, index) => (
                <TermsItem
                    key={index}
                    text={text}
                    boldText={boldText}
                    required={required}
                    checked={checked}
                    onPress={() => updateAgreement && updateAgreement(index)}
                />
            ))}
            <WrappedDivider direction={'row'} color="grayscale200" size={1} />
            <CheckListItem onPress={updateAllAgreementState}>
                <CheckListItem.Section>
                    <CheckListItem.Text isBold color={allAgreed ? 'lightBlack' : 'grayscale500'}>
                        {intl.formatMessage({ id: '@TERMS-009' })}
                    </CheckListItem.Text>
                </CheckListItem.Section>
                <CheckListItem.CheckBox size="large" checked={allAgreed} />
            </CheckListItem>
            <WrappedDivider direction={'row'} color="grayscale200" size={1} style={{ marginBottom: 56 }} />
        </View>
    )
}
