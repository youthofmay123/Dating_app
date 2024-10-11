import { StyleSheet, Dimensions, Platform } from 'react-native';
const { height } = Dimensions.get('window');

export default StyleSheet.create({
    card: {
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
        marginTop: -50,
        borderWidth: 6,
        borderColor: 'white',
    },
    image: {
        flex: 1,
        width: '100%',
        borderRadius: 3,
    },
    photoDescriptionContainer: {
        justifyContent: 'flex-end',
        height: '100%',
        position: 'absolute',
        left: 10,
        bottom: 10,
    },
    text: {
        fontSize: 22,
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
        color: 'white',
        fontFamily: 'Avenir',
    },
    textPronounsWrapper: {
        marginTop: 10,
        backgroundColor: '#F7F1FE',
        borderRadius: 50,
        width: '55%',
    },
    textPronouns: {
        color: '#842BEB',
        padding: 4,
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
    },
    textOccupationWrapper: {
        marginTop: 10,
        flexDirection: 'row',
    },
    textOccupation: {
        color: 'white',
        paddingLeft: 10,
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',

        fontFamily: 'Avenir',
    },
});
