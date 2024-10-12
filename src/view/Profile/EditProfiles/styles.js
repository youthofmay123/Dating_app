import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
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

    mainTitle: {
        textAlign: 'center',
        fontSize: 20,
    },
    complete: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
    },
    title: { fontWeight: 'bold', fontSize: 18, paddingBottom: 5 },
    description: { fontSize: 12, color: 'gray', paddingBottom: 5 },
    photos: {
        height: 350,
        margin: 10,
    },
    aboutMe: {
        height: 150,
        margin: 10,
    },
    myDetails: {
        height: 600,
        margin: 10,
    },
    iEnjoy: {
        height: 180,
        margin: 10,
    },
    iCommunicate: {
        height: 150,
        margin: 10,
    },
    linkedAccounts: {
        height: 200,
        margin: 10,
    },
});

export default styles;
