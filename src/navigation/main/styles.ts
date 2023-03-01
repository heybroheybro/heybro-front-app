import styled, { css, DefaultTheme } from 'styled-components/native'

export const MainTabBarContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 4px 0 0 0;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.white};
        `
    }}
`

export const AvatarImage = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 999px;
`
