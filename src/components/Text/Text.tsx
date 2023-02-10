import React from 'react'
import { TextProps as TextPropsBase } from 'react-native'
import { TypographyText, TypographyTextProps } from './styles'

export type TextProps = TypographyTextProps & TextPropsBase

export function Text({ type = 'b1', font = 'ROBOTO', isBold = false, color, children, ...props }: TextProps) {
    return (
        <TypographyText type={type} font={font} isBold={isBold} color={color} {...props}>
            {children}
        </TypographyText>
    )
}
