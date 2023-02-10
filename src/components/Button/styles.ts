import styled, { css, DefaultTheme } from 'styled-components/native'
import { ButtonType } from './ButtonMain'
import { Text } from '../Text'

export const ButtonWrapper = styled.TouchableOpacity<{ type: ButtonType }>`
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 8px;

    ${(props) => {
        const { type, theme } = props
        const { colors } = theme as DefaultTheme
        if (type === 'round') {
            return css`
                border-radius: 999px;
                background-color: ${colors.white};
            `
        } else if (type === 'transparent') {
            return css``
        } else {
            return css`
                /* border-radius: 999px; */
            `
        }
    }}
`

export const ButtonText = styled(Text)`
    ${(props) => {
        const { fontFamily, typography, colors } = props.theme as DefaultTheme
        const { fontSize } = typography.h4
        return css`
            font-family: ${fontFamily['ROBOTO'].REGULAR};
            font-size: ${fontSize}px;
            color: ${colors.lightBlack};
        `
    }}
`

export const ButtonIcon = styled.Image`
    position: absolute;
    left: 8px;
`
