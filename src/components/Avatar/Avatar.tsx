import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { AvatarImage, AvatarWrapper } from './styles'
import DefaultProfileLargeImg from '@heybro/assets/images/img-profile-default.png'
import DefaultProfileSmallImg from '@heybro/assets/images/ic-my-inactive.png'

type Props = {
    imageUrl?: string
    size?: 'small' | 'large'
} & TouchableOpacityProps

export function Avatar({ imageUrl, size = 'large', ...props }: Props) {
    return (
        <AvatarWrapper activeOpacity={0.8} {...props}>
            <AvatarImage
                source={
                    imageUrl ? { uri: imageUrl } : size === 'large' ? DefaultProfileLargeImg : DefaultProfileSmallImg
                }
            />
        </AvatarWrapper>
    )
}
