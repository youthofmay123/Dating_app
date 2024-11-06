import React, { useRef, useState } from 'react';
import { Text, View, SafeAreaView, Modal, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import { Card, OverlayLabel, Notify } from '../../components/Match/CardUser';
import userDetail from '../../constants/userDetail';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Match = () => {
    const navigation = useNavigation();
    const useSwiper = useRef(null).current;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);

    const handleSwipedRight = () => {
        setIsModalVisible(true); // Hiển thị modal khi vuốt sang phải
    };

    const handleCloseModal = () => {
        setIsModalVisible(false); // Đóng modal
    };

    const handleSwipedTop = () => {
        const selectedUser = userDetail[cardIndex]; // Lấy thông tin người dùng đã chọn
        navigation.navigate('ProfileDetail', { user: selectedUser }); // Điều hướng với dữ liệu người dùng
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
                    cardIndex={cardIndex}
                    backgroundColor="white"
                    stackSize={2}
                    infinite
                    showSecondCard
                    animateOverlayLabelsOpacity
                    disableBottomSwipe // Chặn vuốt xuống
                    onSwipedTop={() => {
                        setCardIndex((prevIndex) => prevIndex + 1);
                        handleSwipedTop();
                    }}
                    onSwipedRight={() => {
                        setCardIndex((prevIndex) => prevIndex + 1);
                        handleSwipedRight();
                    }} // Gọi khi vuốt sang phải
                    overlayLabels={{
                        right: {
                            title: 'LIKE',
                            element: <OverlayLabel iconName="checkmark" color="#EEFDF3" />,
                            style: {
                                wrapper: {
                                    ...styles.overlayWrapper,
                                    alignItems: 'flex-start',
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
