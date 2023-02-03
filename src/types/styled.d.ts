declare module 'styled-components/native' {
    export interface DefaultTheme {
        colors: {
            white: string
            primary: string
            grayscale100: string
            grayscale200: string
            grayscale300: string
            grayscale400: string
            grayscale500: string
            grayscale600: string
            black: string
            purple: string
            red: string
            green: string
            yellow: string
            aqua: string
        }
        typography: {
            h1: {
                fontSize: number
                fontColor: string
            }
            h2: {
                fontSize: number
                fontColor: string
            }
            h3: {
                fontSize: number
                fontColor: string
            }
            h4: {
                fontSize: number
                fontColor: string
            }
            h5: {
                fontSize: number
                fontColor: string
            }
            b1: {
                fontSize: number
                fontColor: string
            }
            b2: {
                fontSize: number
                fontColor: string
            }
            c1: {
                fontSize: number
                fontColor: string
            }
            c2: {
                fontSize: number
                fontColor: string
            }
        }
        fontFamily: {
            ['NOTO-SANS-REGULAR']: string
            ['NOTO-SANS-BOLD']: string
            ['ROBOTO-REGULAR']: string
            ['ROBOTO-BOLD']: string
        }
        size: {
            width: number
            height: number
        }
    }
}
