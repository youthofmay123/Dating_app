import { StyleSheet } from 'react-native';
import color from '../color/color';
const styles = StyleSheet.create({
    premiumBanner: {
        backgroundColor: color.primary,
        borderRadius: 5,
        margin: 20,
        padding: 20,
        alignItems: 'center',
    },
    premiumTitle: {
        fontSize: 20,
        color: color.white,
        fontWeight: 'bold',
    },
    premiumSubtitle: {
        fontSize: 12,
        color: color.white,
        width: '90%',
        paddingTop: 10,
        paddingBottom: 20,
        textAlign: 'center',
    },
    iconStar: {
        position: 'absolute',
    },
    upgradeButton: {
        backgroundColor: color.white,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    tableContainer: {
        backgroundColor: color.white,
        marginHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#F0F2F5',
        paddingVertical: 10,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    row1: {
        fontWeight: 'bold',
        fontSize: 12,
        width: '50%',
    },
    row2: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,
        width: '25%',
    },

    row3: {
        fontWeight: 'bold',
        color: color.primary,
        textAlign: 'center',
        fontSize: 12,
        width: '25%',
    },

    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingVertical: 8,
    },
    tableRowText: {
        fontSize: 12,
        width: '50%',
    },
});
export default styles;
