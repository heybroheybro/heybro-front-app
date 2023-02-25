import styled, { css, DefaultTheme } from 'styled-components/native'
import { ScreenView } from '@heybro/components/ScreenView'
import { Footer } from '@heybro/components/Footer'

export const WrappedScreenView = styled(ScreenView)`
    justify-content: space-between;
`

export const WrappedFooter = styled(Footer)`
    margin: 0 -24px;
    justify-content: flex-end;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.grayscale100};
        `
    }}
`
