import React from 'react'
import { Image } from 'react-native'
import CheckedIconSmall from '@heybro/assets/images/ic-checked-20.png'
import CheckedIconLarge from '@heybro/assets/images/ic-checked-24.png'
import UncheckedIconSmall from '@heybro/assets/images/ic-unchecked-20.png'
import UncheckedIconLarge from '@heybro/assets/images/ic-unchecked-24.png'

interface Props {
    checked?: boolean
    size?: 'small' | 'large'
}

export function CheckBox({ size = 'small', checked = false }: Props) {
    const iconSource = checked
        ? size === 'small'
            ? CheckedIconSmall
            : CheckedIconLarge
        : size === 'small'
        ? UncheckedIconSmall
        : UncheckedIconLarge

    return <Image source={iconSource} />
}
