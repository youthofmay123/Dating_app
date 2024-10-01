import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SelectItem = (props) => {
    const { name, icon } = props;
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 6 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={icon} style={{ padding: 10, width: 40 }} size={18} color={'#333'}></Icon>
                <Text style={{ padding: 10 }}>{name}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'gray' }}>Add</Text>
                <Icon name="angle-right" style={{ padding: 10 }} size={18} color={'gray'}></Icon>
            </View>
        </View>
    );
};

export default SelectItem;
