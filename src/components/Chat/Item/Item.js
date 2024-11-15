import { Image, View } from 'react-native';
import styles from './styles';

const Item = (props) => {
    const { avatar, status, size } = props;
    return (
        <View style={styles.avatarContainer}>
            <Image source={{ uri: avatar }} style={[styles.avatar, { width: size, height: size }]} />
            <View style={[styles.statusIndicator, { backgroundColor: 'green' }]} />
        </View>
    );
};

export default Item;
