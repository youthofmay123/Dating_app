import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        borderRadius: 30,
    },
    statusIndicator: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 17,
        height: 17,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
    },
});

export default styles;
