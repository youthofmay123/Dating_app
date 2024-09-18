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
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        padding: 5,
    },
    icon: {
        position: 'absolute',
        left: 12,
    },
    input: {
        // flex: 1,
        marginLeft: 32,
        width: 240,
        fontSize: 14,
        color: '#000',
    },
});

export default styles;
