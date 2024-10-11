import React, { useRef } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import { Card, OverlayLabel } from '../../components/Match/CardUser';
import userDetail from '../../constants/userDetail';
import styles from './styles';

const Match = () => {
    const useSwiper = useRef(null).current;
    // const handleOnSwipedLeft = () => useSwiper.swipeLeft();
    // const handleOnSwipedTop = () => useSwiper.swipeTop();
    // const handleOnSwipedRight = () => useSwiper.swipeRight();

    return (
        <View style={styles.container}>
            <View style={styles.swiperContainer}>
                <Text>Nga</Text>
                <Swiper
                    ref={useSwiper}
                    animateCardOpacity
                    containerStyle={styles.container}
                    cards={userDetail}
                    renderCard={(card) => <Card card={card} />}
                    cardIndex={0}
                    backgroundColor="white"
                    stackSize={2}
                    infinite
                    showSecondCard
                    animateOverlayLabelsOpacity
                    disableTopSwipe // Chặn vuốt lên
                    disableBottomSwipe // Chặn vuốt xuống
                    overlayLabels={{
                        right: {
                            title: 'LIKE',
                            element: <OverlayLabel iconName="checkmark" color="#EEFDF3" />,
                            style: {
                                wrapper: {
                                    ...styles.overlayWrapper,
                                    alignItem: 'flex-start',
                                    marginLeft: 30,
                                },
                            },
                        },
                    }}
                />
            </View>
        </View>
    );
};

export default Match;
