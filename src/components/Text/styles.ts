import styled, { css, DefaultTheme } from 'styled-components/native'

export type TypographyTextProps = {
    type?: keyof DefaultTheme['typography']
    font?: keyof DefaultTheme['fontFamily']
    color?: keyof DefaultTheme['colors']
    isBold?: boolean
}

export const TypographyText = styled.Text<TypographyTextProps>`
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
    }}
`
