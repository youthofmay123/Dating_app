import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Notify.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Notify = ({ handleCloseModal }) => {
    return (
        <View style={styles.container}>
            <View style={styles.modalContent}>
                <View style={styles.modalLogo}>
                    <Icon name="swipe-right" style={{ padding: 12 }} size={20} color={'#006D7C'} />
                </View>
                <Text style={styles.modalText}>You've just swiped right!</Text>
                <Text style={styles.modalSubtext}>
                    By swiping right, you're expressing interest in this person. If they also swipe right on your
                    profile, it's a match! Do you want to continue?
                </Text>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCloseModal} style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Notify;
