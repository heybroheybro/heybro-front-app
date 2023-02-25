import React from 'react'
import { TermItem } from '@heybro/contexts/terms/types'
import { TouchableOpacityProps } from 'react-native'
import { CheckListItem } from '../CheckListItem'

type Props = TermItem & TouchableOpacityProps

export function TermsItem({ boldText, text, checked, onPress, ...props }: Props) {
    return (
        <CheckListItem onPress={onPress} {...props}>
            <CheckListItem.Section>
                {boldText && (
                    <CheckListItem.Text isBold type="b1" color={checked ? 'lightBlack' : 'grayscale500'}>
                        {boldText}
                    </CheckListItem.Text>
                )}
                <CheckListItem.Text type="b1" color={checked ? 'lightBlack' : 'grayscale500'}>
                    {text}
                </CheckListItem.Text>
            </CheckListItem.Section>
            <CheckListItem.CheckBox checked={checked} />
        </CheckListItem>
    )
}
