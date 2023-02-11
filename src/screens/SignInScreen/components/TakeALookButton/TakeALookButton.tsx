import React from 'react'
import { useIntl } from 'react-intl'
import { ButtonText, WrappedButton } from './styles'
import { TouchableOpacityProps } from 'react-native'

export function TakeALookButton(props: TouchableOpacityProps) {
    const intl = useIntl()

    return (
        <WrappedButton type={'transparent'} {...props}>
            <ButtonText type="h5" font="NOTO-SANS" isBold>
                {intl.formatMessage({ id: '@SIGNIN-001' })}
            </ButtonText>
        </WrappedButton>
    )
}
