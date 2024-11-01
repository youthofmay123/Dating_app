import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        height: 65,
        padding: 10,
        marginBottom: 2,
        flexDirection: 'row',
    },
    avatar: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    groupName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    groupMess: {
        justifyContent: 'center',
    },
    name: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    content: {
        flexDirection: 'row',
        width: 150,
    },
});

export default styles;
