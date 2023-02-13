import React from 'react'
import { StyleProp, TextInputProps, ViewStyle } from 'react-native'
import { Button } from '../Button'
import { TypographyTextProps } from '../Text/styles'
import { SearchBarWrapper, StyledTextInput } from './styles'
import CleanIcon from '@heybro/assets/images/ic-clean.png'

type Props = TypographyTextProps &
    TextInputProps & {
        viewStyle?: StyleProp<ViewStyle>
    }

export function SearchBar({
    type = 'b1',
    font = 'ROBOTO',
    isBold = false,
    color,
    viewStyle,
    onChangeText,
    ...props
}: Props) {
    const handleCleanInput = () => {
        if (onChangeText) onChangeText('')
    }

    return (
        <SearchBarWrapper style={viewStyle}>
            <StyledTextInput
                type={type}
                font={font}
                isBold={isBold}
                color={color}
                onChangeText={onChangeText}
                {...props}
            />
            <Button type="transparent" onPress={handleCleanInput}>
                <Button.Icon source={CleanIcon} />
            </Button>
        </SearchBarWrapper>
    )
}
