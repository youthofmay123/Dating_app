import { StyleSheet, Dimensions, Platform } from 'react-native';
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        height: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalLogo: {
        backgroundColor: '#A6F5FF',
        borderRadius: 100,
        marginBottom: 15,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
        fontFamily: 'Avenir',
    },
    modalSubtext: {
        fontSize: 14,
        marginBottom: 20,
        fontFamily: 'Avenir',
        textAlign: 'center',
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 45,
    },

    closeButton: {
        width: '45%',
        backgroundColor: '#F3F4F6',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
    },
    continueButton: {
        width: '45%',
        backgroundColor: '#00BDD6',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
    },

    closeButtonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    continueButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
});

export default styles;
