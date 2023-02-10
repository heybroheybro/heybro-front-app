import { Dimensions, ColorSchemeName } from 'react-native'
import { DefaultTheme } from 'styled-components/native'

const { width, height } = Dimensions.get('window')

const COLORS: Record<string, DefaultTheme['colors']> = {
    dark: {
        white: '#ffffff',
        primary: '#4d3ef7',
        grayscale100: '#f7f7f7',
        grayscale200: '#ebebeb',
        grayscale300: '#dedee6',
        grayscale400: '#bebeca',
        grayscale500: '#9c9fae',
        grayscale600: '#676975',
        black: '#000000',
        lightBlack: '#333333',
        purple: '#d661ff',
        red: '#ff3e61',
        green: '#00b674',
        yellow: '#ffd951',
        aqua: '#40d9ee',
    },
    light: {
        white: '#ffffff',
        primary: '#4d3ef7',
        grayscale100: '#f7f7f7',
        grayscale200: '#ebebeb',
        grayscale300: '#dedee6',
        grayscale400: '#bebeca',
        grayscale500: '#9c9fae',
        grayscale600: '#676975',
        black: '#000000',
        lightBlack: '#333333',
        purple: '#d661ff',
        red: '#ff3e61',
        green: '#00b674',
        yellow: '#ffd951',
        aqua: '#40d9ee',
    },
}

export function getGlobalTheme(systemTheme: ColorSchemeName): DefaultTheme {
    const colors = COLORS[systemTheme ?? 'dark']
    return {
        colors,
        typography: {
            h1: {
                fontSize: 24,
                fontColor: colors.black,
            },
            h2: {
                fontSize: 22,
                fontColor: colors.black,
            },
            h3: {
                fontSize: 20,
                fontColor: colors.black,
            },
            h4: {
                fontSize: 18,
                fontColor: colors.black,
            },
            h5: {
                fontSize: 16,
                fontColor: colors.black,
            },
            b1: {
                fontSize: 15,
                fontColor: colors.black,
            },
            b2: {
                fontSize: 14,
                fontColor: colors.black,
            },
            c1: {
                fontSize: 13,
                fontColor: colors.black,
            },
            c2: {
                fontSize: 12,
                fontColor: colors.black,
            },
        },
        fontFamily: {
            ['NOTO-SANS']: {
                REGULAR: 'NotoSansKR-Regular',
                BOLD: 'NotoSansKR-Bold',
            },
            ROBOTO: {
                REGULAR: 'Roboto-Regular',
                BOLD: 'Roboto-Bold',
            },
        },
        size: {
            width,
            height,
        },
    }
}
