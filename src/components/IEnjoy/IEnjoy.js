import { Text, View } from 'react-native';
import styles from './styles';
import Options from '../Options';

const IEnjoy = () => {
    return (
        <View>
            <Text style={styles.title}>I enjoy</Text>
            <Text style={styles.description}>Adding your interest is a great way to find like-minded connections.</Text>
            <View style={{ flexDirection: 'row' }}>
                <Options title="Coffee brewing" />
                <Options title="Trekking" />
            </View>
        </View>
    );
};

export default IEnjoy;
