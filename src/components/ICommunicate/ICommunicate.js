import { Text, View } from 'react-native';
import styles from './styles';
import Options from '../Options';

const ICommunicate = () => {
    return (
        <View>
            <Text style={styles.title}>I communicate in</Text>
            <View style={{ flexDirection: 'row' }}>
                <Options title="Finnish" />
            </View>
        </View>
    );
};

export default ICommunicate;
