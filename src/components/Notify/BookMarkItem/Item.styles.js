import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        maxWidth: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#00BDD6',
        padding: 20,
        marginBottom: 15,
    },
    avatar: {
        backgroundColor: 'pink',
        width: 60,
        height: 60,
        borderRadius: 100,
        marginBottom: 20,
    },
    infor: {
        paddingLeft: 30,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 5,
    },
    pronouns: {},
    occupation: {
        position: 'absolute',
        bottom: 5,
        left: 30,
        fontSize: 12,
    },
});

export default styles;
