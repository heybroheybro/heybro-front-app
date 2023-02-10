import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonWrapper } from './styles'

export type ButtonType = 'round' | 'transparent'

type Props = {
    type: ButtonType
} & TouchableOpacityProps

export default function ButtonMain({ children, activeOpacity = 0.8, ...props }: Props) {
    return (
        <ButtonWrapper activeOpacity={activeOpacity} {...props}>
            {children}
        </ButtonWrapper>
    )
}
