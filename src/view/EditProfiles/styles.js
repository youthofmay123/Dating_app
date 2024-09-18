import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        height: 70,
    },
    icon: {
        padding: 10,
        position: 'absolute',
        left: 10,
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    complete: {
        backgroundColor: '#FF3F30',
        height: 80,
        margin: 10,
    },
    photos: {
        backgroundColor: '#FF8B00',
        height: 350,
        margin: 10,
    },
    aboutMe: {
        backgroundColor: '#FFD800',
        height: 70,
        margin: 10,
    },
    myDetails: {
        backgroundColor: '#80CF01',
        height: 600,
        margin: 10,
    },
    iEnjoy: {
        backgroundColor: '#38BDF6',
        height: 70,
        margin: 10,
    },
    iCommunicate: {
        backgroundColor: '#0060FF',
        height: 70,
        margin: 10,
    },
    linkedAccounts: {
        backgroundColor: '#9000C1',
        height: 80,
        margin: 10,
    },
});

export default styles;
