import styled, { css, DefaultTheme } from 'styled-components/native'

export const FooterWrapper = styled.View<{ hasTopBorder: boolean }>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.white};
            border-top-color: ${colors.grayscale200};
            border-top-width: ${props.hasTopBorder ? '1px' : 0};
        `
    }}
`

export const FooterSection = styled.View`
    flex-direction: row;
    align-items: center;
`
