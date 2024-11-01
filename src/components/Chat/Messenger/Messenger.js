import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Item from '../Item';
import { useNavigation } from '@react-navigation/native';

const Messenger = ({ name, status, lastSender, lastContent }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.wrapper}
            onPress={() => {
                navigation.navigate('Window');
            }}
        >
            <View style={styles.avatar}>
                <Item avatar={require('../../../images/Cat.png')} status={status} size={45} />
            </View>
            <View style={styles.groupMess}>
                <View style={styles.groupName}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={{ fontSize: 10, color: 'gray' }}>1 hour ago</Text>
                </View>
                <View style={styles.content}>
                    <Text style={{ marginRight: 5 }}>{lastSender}:</Text>
                    <Text numberOfLines={1}>{lastContent}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Messenger;
