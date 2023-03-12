import styled, { css, DefaultTheme } from 'styled-components/native'

export const BoardMenuContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`

export const BoardMenuButton = styled.TouchableOpacity<{ selected: boolean }>`
    padding: 9px 0;
    border-radius: 999px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${props.selected ? colors.primary : colors.grayscale100};
            padding-left: ${props.selected ? 16 : 8}px;
            padding-right: ${props.selected ? 16 : 8}px;
        `
    }}
`
