import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: { fontWeight: 'bold', fontSize: 18, paddingBottom: 5 },
    description: { fontSize: 12, color: 'gray', paddingBottom: 5 },
    image: {
        borderWidth: 2,
        borderColor: 'gray',
        borderStyle: 'dashed',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    iconAdd: {
        color: 'gray',
        fontSize: 40,
    },
});

export default styles;
