import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Options = (props) => {
    const { title } = props;
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#E7ECF0',
                borderRadius: 10,
                maxWidth: 150,
                margin: 5,
            }}
        >
            <Text style={{ padding: 5 }}>{title}</Text>
            <Icon name="times-circle" size={20} color={'gray'} style={{ padding: 5 }} />
        </View>
    );
};

export default Options;
