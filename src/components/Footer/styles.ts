import styled, { css, DefaultTheme } from 'styled-components/native'
import { Text } from '../Text'

export const FooterWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 24px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.grayscale100};
        `
    }}
`

export const ButtonText = styled(Text)`
    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            color: ${colors.primary};
        `
    }}
`
