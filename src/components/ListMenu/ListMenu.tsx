import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Text } from '@heybro/components/Text'
import { ListMenuContainer, TitleText } from './styles'

type Props = {
    title?: string
    value?: string
} & TouchableOpacityProps

export function ListMenu({ title, value, ...props }: Props) {
    return (
        <ListMenuContainer activeOpacity={0.8} {...props}>
            {title && (
                <TitleText type="h5" color="lightBlack">
                    {title}
                </TitleText>
            )}
            {value && (
                <Text type="b1" font="NOTO-SANS" color="grayscale500">
                    {value}
                </Text>
            )}
        </ListMenuContainer>
    )
}
