import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: { fontWeight: 'bold', fontSize: 18, paddingBottom: 5 },
    description: { fontSize: 12, color: 'gray', paddingBottom: 5 },
    add: {
        position: 'absolute',
        right: 20,
        top: 12,
        overflow: 'hidden',
    },
    input: {
        width: 280,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 5,
    },
});

export default styles;
