import React, { ReactNode } from 'react'
import { NativeModules, Platform } from 'react-native'
import { IntlProvider as NativeIntlProvider, MessageFormatElement } from 'react-intl'

export function IntlProvider({ children }: { children: ReactNode }) {
    const deviceLanguage =
        Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
            : NativeModules.I18nManager.localeIdentifier

    const locale = deviceLanguage.split(/[-_]/)[0]

    const translations: Record<string, any> = {
        en: require('@heybro/locales/en.json'),
        ko: require('@heybro/locales/ko.json'),
    }

    const getCurrentTranslation: (
        locale: string,
    ) => Record<string, string> | Record<string, MessageFormatElement[]> | undefined = (locale) => {
        return translations[locale] ?? translations['en'] //fallback
    }

    return (
        <NativeIntlProvider messages={getCurrentTranslation(locale)} locale={locale} defaultLocale="en">
            {children}
        </NativeIntlProvider>
    )
}
