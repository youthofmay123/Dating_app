import { StyleSheet } from 'react-native';
import color from '../color/color';
const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    groupAvatar: {
        position: 'relative',
        width: 120,
        height: 120,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: color.primary,
    },
    complete: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 12,
        color: color.white,
        bottom: -10,
        left: 10,
        height: 20,
        width: 100,
        borderRadius: 10,
        backgroundColor: color.primary,
    },
    groupName: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        marginLeft: 10,
        width: 140,
        backgroundColor: color.second,
        borderRadius: 10,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#333',
    },
});
export default styles;
