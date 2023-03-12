import React from 'react'
import { Image, ImageSourcePropType, TouchableOpacityProps } from 'react-native'
import { Text } from '@heybro/components/Text'
import { BoardMenuButton } from './styles'

interface Props extends TouchableOpacityProps {
    iconSource: ImageSourcePropType
    text: string
    selected: boolean
}

export function BoardMenuItem({ iconSource, text, selected, activeOpacity = 1, ...props }: Props) {
    return (
        <BoardMenuButton selected={selected} activeOpacity={activeOpacity} {...props}>
            <Image source={iconSource} />
            {selected && (
                <Text type="b1" isBold color="white" style={{ marginLeft: 4 }}>
                    {text}
                </Text>
            )}
        </BoardMenuButton>
    )
}
