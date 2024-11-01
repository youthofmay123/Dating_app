import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    wrapper: {
        height: 140,
        padding: 10,
        margin: 2,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    titleGroup: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    itemContainer: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    name: {
        marginTop: 4,
        fontSize: 12,
        color: 'gray',
        textAlign: 'center',
    },
});

export default styles;
