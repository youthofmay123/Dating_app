import { FlatList, Image, Text, View } from 'react-native';
import styles from './styles';
import Item from '../Item';

const Matches = () => {
    const data = [
        { id: '1', name: 'Maria White', avatar: require('../../../images/Cat.png'), status: 'green' },
        { id: '2', name: 'Anna Fernandez', avatar: require('../../../images/Cat.png'), status: 'grey' },
        { id: '3', name: 'Jennifer Brown', avatar: require('../../../images/Cat.png'), status: 'yellow' },
        { id: '4', name: 'Jennifer Brown', avatar: require('../../../images/Cat.png'), status: 'yellow' },
        { id: '5', name: 'Jennifer Brown', avatar: require('../../../images/Cat.png'), status: 'yellow' },
        { id: '6', name: 'Jennifer Brown', avatar: require('../../../images/Cat.png'), status: 'yellow' },
    ];
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleGroup}>
                <Text style={styles.title}>Matches </Text>
                <Text>(7)</Text>
            </View>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MatchItem {...item} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const MatchItem = ({ name, avatar, status }) => {
    return (
        <View style={styles.itemContainer}>
            <Item avatar={avatar} status={status} size={60} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default Matches;
