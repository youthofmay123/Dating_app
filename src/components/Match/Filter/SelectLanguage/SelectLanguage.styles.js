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
        width: '100%',
        height: 35,
        backgroundColor: '#F3F4F6',
        borderRadius: 5,
        padding: 5,
    },
});

export default styles;
