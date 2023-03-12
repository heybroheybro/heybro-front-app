import React from 'react'
import { Image } from 'react-native'
import { Text } from '../Text'
import { Container, WrappedButton } from './styles'
import AlertIcon from '@heybro/assets/images/ic-alert.png'

interface Props {
    message: string
    buttonText?: string
    onPressButton?: () => void
}

export function PinnedAlertMessage({ message, buttonText, onPressButton }: Props) {
    return (
        <Container>
            <Image source={AlertIcon} />
            <Text type="h5" font="NOTO-SANS" isBold color="grayscale400" style={{ textAlign: 'center' }}>
                {message}
            </Text>
            {buttonText && (
                <WrappedButton type={'round'} color="grayscale400" onPress={onPressButton}>
                    <Text type="b1" font="NOTO-SANS" isBold color="white">
                        {buttonText}
                    </Text>
                </WrappedButton>
            )}
        </Container>
    )
}
