import styled, { css, DefaultTheme } from 'styled-components/native'
import { ScreenView } from '@heybro/components/ScreenView'

export const WrappedScreenView = styled(ScreenView)`
    justify-content: space-between;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.white};
        `
    }}
`

export const UpperSection = styled.View`
    padding: 0 24px;
`

export const EmailContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 16px 24px;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.grayscale100};
        `
    }}
`

export const ImageIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-right: 4px;
`
