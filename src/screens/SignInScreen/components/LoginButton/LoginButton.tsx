import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Button } from '@heybro/components/Button'
import { useIntl } from 'react-intl'
import GoogleIcon from '@heybro/assets/images/ic-google.png'
import AppleIcon from '@heybro/assets/images/ic-apple.png'

type Props = {
    type: 'google' | 'apple'
} & TouchableOpacityProps

export function LoginButton({ type, onPress, disabled, style }: Props) {
    const intl = useIntl()
    const { buttonText, iconSource } =
        type === 'apple'
            ? {
                  buttonText: intl.formatMessage({ id: '@SIGNIN-002' }),
                  iconSource: AppleIcon,
              }
            : {
                  buttonText: intl.formatMessage({ id: '@SIGNIN-003' }),
                  iconSource: GoogleIcon,
              }
    return (
        <Button type={'round'} onPress={onPress} disabled={disabled} style={style}>
            <Button.Icon source={iconSource} />
            <Button.Text type="h5" font="NOTO-SANS">
                {buttonText}
            </Button.Text>
        </Button>
    )
}
