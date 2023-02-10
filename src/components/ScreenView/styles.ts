import styled, { css, DefaultTheme } from 'styled-components/native'

export const ScreenViewWrapper = styled.View`
    flex: 1;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.grayscale100};
        `
    }}
`
