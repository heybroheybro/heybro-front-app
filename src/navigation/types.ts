import { NavigatorScreenParams } from '@react-navigation/native'

export type RootParamList = {
    IntroNav: NavigatorScreenParams<IntroParamList>
    MainNav: NavigatorScreenParams<MainParamList>
    HomeNav: NavigatorScreenParams<HomeParamList>
    MyNav: NavigatorScreenParams<MyParamList>
}

export type IntroParamList = {
    SignIn: undefined
    Terms: undefined
}

export type MainParamList = {
    Home: undefined
    Notification: undefined
    My: undefined
}

export type HomeParamList = {
    SearchCity: {
        type: 'interest-search' | 'living-search'
    }
}

export type MyParamList = {
    Settings: undefined
}
