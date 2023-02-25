import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { CheckListItemContainer } from './styles'

export function CheckListItemMain({ children, activeOpacity = 0.8, ...props }: TouchableOpacityProps) {
    return (
        <CheckListItemContainer activeOpacity={activeOpacity} {...props}>
            {children}
        </CheckListItemContainer>
    )
}
