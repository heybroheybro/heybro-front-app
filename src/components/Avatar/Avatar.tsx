import React from 'react'
import { Image, TouchableOpacityProps } from 'react-native'
import { AvatarWrapper } from './styles'
import DefaultProfileImg from '@heybro/assets/images/img-profile-default.png'

type Props = {
    imageUrl?: string
} & TouchableOpacityProps

export function Avatar({ imageUrl, ...props }: Props) {
    return (
        <AvatarWrapper activeOpacity={0.8} {...props}>
            <Image source={imageUrl ? { uri: imageUrl } : DefaultProfileImg} />
        </AvatarWrapper>
    )
}
