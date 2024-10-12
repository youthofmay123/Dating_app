import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    swiperContainer: {
        height: '80%',
    },

    overlayWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
