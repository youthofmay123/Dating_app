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
        alignItems: 'center',
        width: 120,
        height: 120,
    },
    percent: {
        position: 'relative',
    },
    avatar: {
        position: 'absolute',
        top: 15,
        left: 15,
        width: 90,
        height: 90,
        borderRadius: 100,
    },
    complete: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 12,
        color: color.white,
        bottom: -5,
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
