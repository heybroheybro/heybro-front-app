import React from 'react'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MyParamList, RootParamList } from '@heybro/navigation/types'
import { useIntl } from 'react-intl'
import { Footer } from '@heybro/components/Footer'
import { ScreenView } from '@heybro/components/ScreenView'
import { ListMenu } from '@heybro/components/ListMenu'
import { useGetProfile } from '@heybro/api/my'
import { Text } from '@heybro/components/Text'
import { useAuthContext } from '@heybro/contexts/auth'
import { EmailContainer, UpperSection, ImageIcon, WrappedScreenView } from './styles'
import AppleIcon from '@heybro/assets/images/ic-apple.png'
import GoogleIcon from '@heybro/assets/images/ic-google.png'

type Props = CompositeScreenProps<NativeStackScreenProps<RootParamList>, NativeStackScreenProps<MyParamList, 'Account'>>

export function AccountScreen({ navigation }: Props) {
    const intl = useIntl()
    const { signOut } = useAuthContext()
    const { data: userInfo } = useGetProfile()
    const { email, provider } = {
        email: userInfo?.data.data?.email,
        provider: userInfo?.data.data?.provider,
    }

    const handleSignOut = async () => {
        await signOut()
    }

    const handlePressCloseButton = () => {
        navigation.goBack()
    }

    return (
        <WrappedScreenView type="top">
            <UpperSection>
                <ScreenView.Title type="h2" font="NOTO-SANS" isBold color="lightBlack">
                    {intl.formatMessage({ id: '@COMMON-007' })}
                </ScreenView.Title>
                <EmailContainer>
                    <ImageIcon source={provider === 'google.com' ? GoogleIcon : AppleIcon} />
                    <Text>{email}</Text>
                </EmailContainer>
                <ListMenu title={intl.formatMessage({ id: '@COMMON-008' })} onPress={handleSignOut} />
            </UpperSection>
            <Footer hasTopBorder>
                <Footer.Button type="close" onPress={handlePressCloseButton} />
            </Footer>
        </WrappedScreenView>
    )
}
