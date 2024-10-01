import { StyleSheet } from 'react-native';
import color from '../../../components/color/color';
const styles = StyleSheet.create({
    left: {
        flexDirection: 'row',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: color.white,
    },
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
    },
    iconRefresh: {
        paddingLeft: 18,
    },
    iconSliders: {
        backgroundColor: color.second,
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
