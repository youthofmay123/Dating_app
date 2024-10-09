import { StyleSheet } from 'react-native';
import color from '../../../color/color';

const styles = StyleSheet.create({
    title: { fontWeight: 'bold', fontSize: 18, paddingBottom: 5 },
    description: { fontSize: 12, color: 'gray', marginBottom: 10 },
    textArea: {
        height: 100,
        padding: 10,
        backgroundColor: '#E1E1E1',
        borderRadius: 5,
        textAlignVertical: 'top',
    },
});

export default styles;
