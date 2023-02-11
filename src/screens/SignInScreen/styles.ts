import styled, { css, DefaultTheme } from 'styled-components/native'
import { ScreenView } from '@heybro/components/ScreenView'

export const WrappedScreenView = styled(ScreenView)`
    justify-content: space-between;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.primary};
        `
    }}
`

export const ButtonContainer = styled.View`
    padding: 0 32px;
    margin-bottom: 56px;
`
