import React, { useState } from 'react'
import { FloatingAction, IActionProps } from 'react-native-floating-action'
import { useIntl } from 'react-intl'
import { useGlobalTheme } from '@heybro/hooks/useGlobalTheme'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParamList } from '@heybro/navigation/types'
import QuestionIcon from '@heybro/assets/images/ic-hello.png'
import InformingIcon from '@heybro/assets/images/ic-message.png'

export function FloatingMenu() {
    const intl = useIntl()
    const { colors } = useGlobalTheme()
    const { navigate } = useNavigation<NativeStackNavigationProp<RootParamList>>()

    const [isOpened, setIsOpened] = useState(false)
    const actions: IActionProps[] = [
        {
            text: intl.formatMessage({ id: '@HOME-006' }),
            name: 'QUESTION',
            icon: QuestionIcon,
            textBackground: 'transparent',
            textColor: colors.white,
            color: colors.primary,
            tintColor: '',
        },
        {
            text: intl.formatMessage({ id: '@HOME-007' }),
            name: 'TIP',
            icon: InformingIcon,
            textBackground: 'transparent',
            textColor: colors.white,
            color: colors.primary,
            tintColor: '',
        },
    ]

    const handlePressMenuItem = (name?: string) => {
        if (name === actions[0].name) {
            navigate('HomeNav', { screen: 'WritePost', params: { type: 'QUESTION' } })
        } else if (name === actions[1].name) {
            navigate('HomeNav', { screen: 'WritePost', params: { type: 'TIP' } })
        }
    }

    return (
        <FloatingAction
            actions={actions}
            color={isOpened ? colors.grayscale400 : colors.primary}
            onStateChange={() => setIsOpened((prev) => !prev)}
            onPressItem={handlePressMenuItem}
        />
    )
}
