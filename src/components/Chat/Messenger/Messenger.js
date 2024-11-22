import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Item from '../Item';
import { useNavigation } from '@react-navigation/native';

const Messenger = ({ item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.wrapper}
            onPress={() => {
                navigation.navigate('Window', { user: item });
            }}
        >
            <View style={styles.avatar}>
                <Item avatar={item.photos[0].url} status={item.status} size={45} />
            </View>
            <View style={styles.groupMess}>
                <View style={styles.groupName}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={{ fontSize: 10, color: 'gray' }}>1 hour ago</Text>
                </View>
                <View style={styles.content}>
                    <Text style={{ marginRight: 5 }}></Text>
                    <Text numberOfLines={1}></Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Messenger;
