import React, { useRef, useState } from 'react';
import { View, Modal } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { useDispatch, useSelector } from 'react-redux';
import { Card, OverlayLabel, Notify } from '../../components/Match/CardUser';
import styles from './styles';
import { setCurrentUser, addFavoriteUser } from '../../redux/userSlice';
import { useNavigation } from '@react-navigation/native';

const Match = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const selectedUser = useSelector((state) => state.user.currentUser);
    const userDetail = useSelector((state) => state.user.allUsers).filter((user) => user.id !== selectedUser.id);


    const handleSwipedRight = () => {
        setIsModalVisible(true); // Show modal when swiped right
    };

    const handleCloseModal = () => {
        setIsModalVisible(false); // Close modal
    };

    const handleContinue = () => {
        console.log('Selected User:', selectedUser); // Log the selected user to ensure it's not undefined
        if (selectedUser) {
            dispatch(addFavoriteUser(selectedUser)); // Only dispatch if selectedUser is valid
        }
        setIsModalVisible(false); // Close modal
    };

    const handleSwipedTop = () => {
        navigation.navigate('ProfileDetail');
    };
    // Hàm được gọi khi người dùng vuốt
    const handleSwiped = (index) => {
        // Lấy người dùng tại index
        const selectedUser = userDetail[index];
        // Cập nhật người dùng hiện tại trong Redux store
        dispatch(setCurrentUser(selectedUser));
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
                    onSwiped={handleSwiped} // Update cardIndex on each swipe
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
                    <Notify handleCloseModal={handleCloseModal} handleContinue={handleContinue} />
                </Modal>
            </View>
        </View>
    );
};

export default Match;
