import { StyleSheet } from 'react-native';
import color from '../../components/color/color';
const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    user: {
        height: 290,
        padding: 15,
    },
    updateUser: {
        // height: 700,
        marginBottom: 10,
        minHeight: 200,
    },
    infoUser: {
        height: '60%',
    },
    authen: {
        height: '40%',
        backgroundColor: '#F0F2F5',
    },

    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: color.white,
    },
    tabText: {
        fontSize: 16,
        marginHorizontal: 20,
        color: 'gray',
    },
    activeTab: {
        color: color.primary,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: color.primary,
        paddingBottom: 5,
    },
});

export default styles;
