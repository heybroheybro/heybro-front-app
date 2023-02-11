import { Text } from '@heybro/components/Text'
import styled, { css, DefaultTheme } from 'styled-components/native'

export const OnBoardingWrapper = styled.View`
    align-items: center;
`

export const OnBoardingLogo = styled.Image`
    margin: 4px 0 24px;
`

export const OnBoardingLabel = styled(Text)`
    margin: 0 0 32px 0;
    text-align: center;
    line-height: 28.96px;

    ${(props) => {
        const { colors, typography, fontFamily } = props.theme as DefaultTheme
        const { fontSize } = typography.h3
        return css`
            font-family: ${fontFamily['NOTO-SANS'].REGULAR};
            font-size: ${fontSize}px;
            color: ${colors.white};
        `
    }}
`

export const ContentContainer = styled.View`
    align-items: center;

    ${(props) => {
        const { size } = props.theme as DefaultTheme
        return css`
            width: ${size.width}px;
        `
    }}
`

export const PaginationWrapper = styled.View`
    flex-direction: row;
`
