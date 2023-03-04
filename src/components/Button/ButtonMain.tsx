import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { DefaultTheme } from 'styled-components/native'
import { ButtonWrapper } from './styles'

export type ButtonType = 'round' | 'transparent'

type Props = {
    type: ButtonType
    color?: keyof DefaultTheme['colors']
} & TouchableOpacityProps

export default function ButtonMain({ children, color = 'white', activeOpacity = 0.8, ...props }: Props) {
    return (
        <ButtonWrapper activeOpacity={activeOpacity} colorKey={color} {...props}>
            {children}
        </ButtonWrapper>
    )
}
