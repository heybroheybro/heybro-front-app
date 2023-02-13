import styled, { css, DefaultTheme } from 'styled-components/native'
import { TypographyTextProps } from '../Text/styles'

export const SearchBarWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    border-radius: 999px;
    border-width: 1px;
    height: 48px;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.white};
            border-color: ${colors.black};
        `
    }};
`

export const StyledTextInput = styled.TextInput<TypographyTextProps>`
    flex: 1;

    ${(props) => {
        const { type, font, isBold, color, theme } = props
        const { typography, fontFamily, colors } = theme as DefaultTheme
        const { fontSize, fontColor } = typography[type ?? 'b1']
        const { BOLD, REGULAR } = fontFamily[font ?? 'ROBOTO']

        return css`
            font-family: ${isBold ? BOLD : REGULAR};
            font-size: ${fontSize}px;
            color: ${color ? colors[color] : fontColor};
            font-weight: ${isBold ? 'bold' : 'normal'};
        `
    }};
`
