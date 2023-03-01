import React, { useEffect, useMemo } from 'react'
import { MainParamList, RootParamList } from '@heybro/navigation/types'
import { Avatar } from '@heybro/components/Avatar'
import { ScreenView } from '@heybro/components/ScreenView'
import { Divider } from '@heybro/components/Divider'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { Text } from '@heybro/components/Text'
import { useIntl } from 'react-intl'
import { CityWrapper, TopContainer, WrappedListMenu } from './styles'
import { useGetProfile } from '@heybro/api/my'
import { ActivityIndicator } from 'react-native'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAuthContext } from '@heybro/contexts/auth'

type Props = CompositeScreenProps<NativeStackScreenProps<RootParamList>, BottomTabScreenProps<MainParamList, 'My'>>

export function MyScreen({ navigation }: Props) {
    const intl = useIntl()
    const { top } = useSafeAreaInsets()
    const { isAuthenticated } = useAuthContext()
    const { data: profileResult, isLoading } = useGetProfile()
    const { name, picture, email, myCity, favoriteCities } = profileResult?.data.data || {
        name: '',
        picture: '',
        email: '',
        myCity: undefined,
        favoriteCities: [],
    }
    const myCityName = myCity ? myCity.cityName : undefined
    const favoriteCityName = useMemo(() => {
        const favoriteCitiesLength = favoriteCities.length
        if (favoriteCitiesLength < 1) return

        return favoriteCitiesLength > 1
            ? `${favoriteCities[0].cityName} 외 ${favoriteCitiesLength - 1}`
            : favoriteCities[0].cityName
    }, [favoriteCities])

    const handleRoute = (destination: 'account' | 'favorite-city' | 'my-city' | 'settings') => {
        switch (destination) {
            case 'account':
                navigation.navigate('MyNav', { screen: 'Account' })
                break
            case 'favorite-city':
            case 'my-city':
                navigation.navigate('HomeNav', {
                    screen: 'SearchCity',
                    params: { type: destination },
                })
                break
            case 'settings':
                navigation.navigate('MyNav', { screen: 'Settings' })
                break
        }
    }

    useEffect(() => {
        if (!isAuthenticated) navigation.navigate('IntroNav', { screen: 'SignIn' })
    }, [isAuthenticated, navigation])

    if (isLoading) return <ActivityIndicator />
    if (!profileResult?.data.data) return

    return (
        <ScreenView>
            <TopContainer style={{ paddingTop: (top || 10) + 16 }}>
                <Avatar imageUrl={picture} />
                <CityWrapper>
                    <Text type="b2" font="NOTO-SANS">
                        {myCityName}
                    </Text>
                </CityWrapper>
                <Text type="h3" font="NOTO-SANS" isBold>
                    {name}
                </Text>
            </TopContainer>
            <Divider direction={'row'} color="grayscale100" />
            <WrappedListMenu
                title={intl.formatMessage({ id: '@COMMON-007' })}
                value={email}
                onPress={() => handleRoute('account')}
            />
            <WrappedListMenu
                title={intl.formatMessage({ id: '@COMMON-005' })}
                value={myCityName ?? intl.formatMessage({ id: '@COMMON-003' })}
                onPress={() => handleRoute('my-city')}
                disabled={myCityName !== undefined}
            />
            <WrappedListMenu
                title={intl.formatMessage({ id: '@COMMON-006' })}
                value={favoriteCityName ?? intl.formatMessage({ id: '@COMMON-003' })}
                onPress={() => handleRoute('favorite-city')}
                disabled={favoriteCityName !== undefined}
            />
            <Divider direction={'row'} color="grayscale100" />
            <WrappedListMenu
                title={intl.formatMessage({ id: '@SETTING-001' })}
                onPress={() => handleRoute('settings')}
            />
        </ScreenView>
    )
}
