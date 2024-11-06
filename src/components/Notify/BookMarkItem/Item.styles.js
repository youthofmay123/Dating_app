import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        maxWidth: '100%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#00BDD6',
        padding: 20,
        marginBottom: 15,
    },
    avatar: {
        backgroundColor: 'pink',
        width: 70,
        height: 70,
        borderRadius: 100,
        marginBottom: 20,
    },
    img: {
        width: 70,
        height: 70,
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
    pronouns: {
        // marginTop: 10,
        // backgroundColor: 'pink',
        // borderRadius: 100,
        // justifyContent: 'center',
        // padding: 5,
    },
    occupation: {
        position: 'absolute',
        bottom: 5,
        left: 30,
        fontSize: 12,
        flexDirection: 'row',
    },
});

export default styles;
