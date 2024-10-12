import React, { useRef, useState } from 'react';
import { Text, View, SafeAreaView, Modal, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import { Card, OverlayLabel, Notify } from '../../components/Match/CardUser';
import userDetail from '../../constants/userDetail';
import styles from './styles';

const Match = () => {
    const useSwiper = useRef(null).current;
    // const handleOnSwipedLeft = () => useSwiper.swipeLeft();
    // const handleOnSwipedTop = () => useSwiper.swipeTop();
    // const handleOnSwipedRight = () => useSwiper.swipeRight();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleSwipedRight = () => {
        // Hiển thị modal khi vuốt sang phải
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        // Đóng modal
        setIsModalVisible(false);
    };
    return (
        <View style={styles.container}>
            <View style={styles.swiperContainer}>
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
                    onSwipedRight={handleSwipedRight} // Gọi khi vuốt sang phải
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
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={handleCloseModal} // Đóng modal khi nhấn phím back (Android)
                >
                    <Notify handleCloseModal={handleCloseModal} />
                </Modal>
            </View>
        </View>
    );
};

export default Match;
