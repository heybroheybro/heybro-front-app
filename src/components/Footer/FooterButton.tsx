import React from 'react'
import { Image, TouchableOpacityProps } from 'react-native'
import { Button } from '../Button'
import { Text } from '../Text'
import CloseIcon from '@heybro/assets/images/ic-close.png'
import HomeIcon from '@heybro/assets/images/ic-home-active.png'

interface Props extends TouchableOpacityProps {
    type?: 'close' | 'next' | 'home'
}

export function FooterButton({ type = 'close', disabled, ...props }: Props) {
    return (
        <Button type={'transparent'} disabled={disabled} {...props}>
            {type === 'next' ? (
                <Text type="h4" font="ROBOTO" isBold color={disabled ? 'grayscale300' : 'primary'}>
                    Next
                </Text>
            ) : (
                <Image source={type === 'close' ? CloseIcon : HomeIcon} />
            )}
        </Button>
    )
}
