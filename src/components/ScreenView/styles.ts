import styled, { css, DefaultTheme } from 'styled-components/native'
import { Text } from '../Text'

export type HorizontalPaddingSize = '0' | '16' | '24'

export const ScreenViewWrapper = styled.View<{ horizontalPadding: HorizontalPaddingSize }>`
    flex: 1;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.grayscale100};
            padding-left: ${props.horizontalPadding}px;
            padding-right: ${props.horizontalPadding}px;
        `
    }}
`

export const TitleText = styled(Text)`
    margin: 16px 0px;
`
