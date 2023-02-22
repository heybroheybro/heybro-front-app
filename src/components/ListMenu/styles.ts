import { Text } from '@heybro/components/Text'
import styled, { css, DefaultTheme } from 'styled-components/native'

export const ListMenuContainer = styled.TouchableOpacity`
    padding: 16px 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.white};
        `
    }}
`

export const TitleText = styled(Text)`
    ${(props) => {
        const { fontFamily } = props.theme as DefaultTheme
        return css`
            font-family: ${fontFamily['NOTO-SANS'].BOLD};
        `
    }}
`
