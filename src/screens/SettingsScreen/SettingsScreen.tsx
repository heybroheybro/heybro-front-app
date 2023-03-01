import React from 'react'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MyParamList, RootParamList } from '@heybro/navigation/types'
import { UpperSection, WrappedScreenView } from './styles'
import { useIntl } from 'react-intl'
import { Footer } from '@heybro/components/Footer'
import { ScreenView } from '@heybro/components/ScreenView'
import { ListMenu } from '@heybro/components/ListMenu'
import { useAppVersion } from '@heybro/hooks/useAppVersion'

type Props = CompositeScreenProps<
    NativeStackScreenProps<RootParamList>,
    NativeStackScreenProps<MyParamList, 'Settings'>
>

export function SettingsScreen({ navigation }: Props) {
    const intl = useIntl()
    const { appVersion } = useAppVersion()

    const handlePressAccountMenu = () => {
        navigation.navigate('MyNav', { screen: 'Account' })
    }

    const handlePressHomeButton = () => {
        navigation.navigate('MainNav', { screen: 'Home' })
    }

    const handlePressCloseButton = () => {
        navigation.goBack()
    }

    return (
        <WrappedScreenView type="top">
            <UpperSection>
                <ScreenView.Title type="h2" font="NOTO-SANS" isBold color="lightBlack">
                    {intl.formatMessage({ id: '@SETTING-001' })}
                </ScreenView.Title>
                <ListMenu title={intl.formatMessage({ id: '@COMMON-007' })} onPress={handlePressAccountMenu} />
                {/* <ListMenu title={intl.formatMessage({ id: '@SETTING-002' })} /> */}
                <ListMenu title={intl.formatMessage({ id: '@COMMON-009' })} />
                <ListMenu title={intl.formatMessage({ id: '@SETTING-003' })} />
                <ListMenu title={intl.formatMessage({ id: '@SETTING-004' })} value={appVersion} disabled />
                {/* <ListMenu
                    title={intl.formatMessage({ id: '@SETTING-005' })}
                    value={intl.formatMessage({ id: '@SETTING-006' })}
                /> */}
            </UpperSection>
            <Footer hasTopBorder>
                <Footer.Button type="close" onPress={handlePressCloseButton} />
                <Footer.Button type="home" onPress={handlePressHomeButton} />
            </Footer>
        </WrappedScreenView>
    )
}
