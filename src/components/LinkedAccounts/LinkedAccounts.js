import { Text, View } from 'react-native';
import styles from './styles';
import SelectItem from '../SelectItem';

const LinkedAccounts = () => {
    return (
        <View>
            <Text style={styles.title}>Linked accounts</Text>
            <SelectItem name="Instagram" icon="instagram" />
            <SelectItem name="Facebook" icon="facebook-square" />
            <SelectItem name="Twitter" icon="twitter" />
        </View>
    );
};

export default LinkedAccounts;
