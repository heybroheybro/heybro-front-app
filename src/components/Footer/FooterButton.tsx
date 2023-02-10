import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Button } from '../Button'
import { ButtonText } from './styles'

export function FooterButton({ children, ...props }: TouchableOpacityProps) {
    return (
        <Button type={'transparent'} {...props}>
            <ButtonText type="h4" font="ROBOTO" isBold>
                {children}
            </ButtonText>
        </Button>
    )
}
