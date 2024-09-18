import { StyleSheet } from 'react-native';
import color from '../color/color';
const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-between',
    },
    iconShield: {
        backgroundColor: color.second,
        margin: 10,
        padding: 10,
        borderRadius: 100,
    },
    content: {
        width: 210,
    },
});
export default styles;
