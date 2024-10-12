import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        position: 'absolute',
        right: '125%',
    },
    title: {},
    mainTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default styles;
