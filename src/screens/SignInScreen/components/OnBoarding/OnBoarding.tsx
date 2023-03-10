import React from 'react'
import { Image, ViewProps } from 'react-native'
import { useIntl } from 'react-intl'
import { Dot } from './Dot'
import { useScroll } from '@heybro/hooks/useScroll'
import { ContentContainer, OnBoardingLabel, OnBoardingLogo, OnBoardingWrapper, PaginationWrapper } from './styles'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import HelloIcon from '@heybro/assets/images/ic-hello.png'
import MessageIcon from '@heybro/assets/images/ic-message.png'
import SpaceshipIcon from '@heybro/assets/images/ic-spaceship.png'
import LogoImg from '@heybro/assets/images/img-logo.png'

const ON_BOARDING_DATA = [
    { label: '@SIGNIN-004', icon: HelloIcon },
    { label: '@SIGNIN-005', icon: MessageIcon },
    { label: '@SIGNIN-006', icon: SpaceshipIcon },
]

export function OnBoarding({ ...props }: ViewProps) {
    const intl = useIntl()
    const scrollX = useSharedValue(0)
    const scrollRef = useScroll({ value: scrollX, pageLength: ON_BOARDING_DATA.length })

    const handleScroll = useAnimatedScrollHandler((e) => {
        scrollX.value = e.contentOffset.x
    })

    const renderContents = () => {
        return ON_BOARDING_DATA.map(({ icon, label }, index) => {
            return (
                <ContentContainer key={index}>
                    <Image source={icon} />
                    <OnBoardingLogo source={LogoImg} />
                    <OnBoardingLabel>{intl.formatMessage({ id: label })}</OnBoardingLabel>
                </ContentContainer>
            )
        })
    }

    const renderDots = () => {
        const dotArray = new Array(ON_BOARDING_DATA.length).fill(0)
        return ON_BOARDING_DATA.map((_, index) => (
            <Dot key={index} dotArray={dotArray} xPos={scrollX} currentIndex={index} />
        ))
    }

    return (
        <OnBoardingWrapper {...props}>
            <Animated.ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={handleScroll}>
                {renderContents()}
            </Animated.ScrollView>
            <PaginationWrapper>{renderDots()}</PaginationWrapper>
        </OnBoardingWrapper>
    )
}
