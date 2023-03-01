import { ListMenu } from '@heybro/components/ListMenu'
import styled, { css, DefaultTheme } from 'styled-components/native'

export const TopContainer = styled.View`
    padding: 16px 24px 32px;

    ${(props) => {
        const { colors } = props.theme as DefaultTheme
        return css`
            background-color: ${colors.white};
        `
    }}
`

export const CityWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 16px 0 8px;
`

export const WrappedListMenu = styled(ListMenu)`
    padding-left: 24px;
    padding-right: 24px;
`
