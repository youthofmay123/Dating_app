import React, { useRef, useState } from 'react';
import { View, Modal } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import { Card, OverlayLabel, Notify } from '../../components/Match/CardUser';
import userDetail from '../../constants/userDetail';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Match = () => {
    const navigation = useNavigation();
    const [cardIndex, setCardIndex] = useState(0); // Initialize to 0 to track the current card index
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSwipedRight = () => {
        setIsModalVisible(true); // Show modal when swiped right
    };

    const handleCloseModal = () => {
        setIsModalVisible(false); // Close modal
    };

    const handleSwipedTop = () => {
        // Get the selected user's details based on the current cardIndex
        const selectedUser = userDetail[cardIndex];
        // Navigate to the ProfileDetail screen with the selected user's data
        navigation.navigate('ProfileDetail', { user: selectedUser });
    };

    return (
        <View style={styles.container}>
            <View style={styles.swiperContainer}>
                <Swiper
                    animateCardOpacity
                    containerStyle={styles.container}
                    cards={userDetail}
                    renderCard={(card) => <Card card={card} />}
                    backgroundColor="white"
                    stackSize={2}
                    infinite
                    showSecondCard
                    animateOverlayLabelsOpacity
                    disableBottomSwipe
                    onSwipedTop={handleSwipedTop}
                    onSwipedRight={handleSwipedRight}
                    onSwiped={(index) => setCardIndex(index + 1)} // Update cardIndex on each swipe
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
                    onRequestClose={handleCloseModal}
                >
                    <Notify handleCloseModal={handleCloseModal} />
                </Modal>
            </View>
        </View>
    );
};

export default Match;
