import { Text, View } from 'react-native';
import styles from './styles';
import SelectItem from '../SelectItem';
const MyDetails = () => {
    return (
        <View>
            <Text style={styles.title}>My details</Text>
            <SelectItem name="Occupation" icon="folder-o" />
            <SelectItem name="Gender & Pronouns" icon="user-o" />
            <SelectItem name="Education" icon="graduation-cap" />
            <SelectItem name="Location" icon="map-marker" />
            <Text style={styles.description}>Most people also want to know</Text>
            <SelectItem name="Height" icon="eraser" />
            <SelectItem name="Smoking" icon="soundcloud" />
            <SelectItem name="Drinking" icon="beer" />
            <SelectItem name="Pets" icon="github-square" />
            <SelectItem name="Children" icon="child" />
            <SelectItem name="Zodiac sign" icon="star-half-o" />
            <SelectItem name="Religion" icon="sun-o" />
        </View>
    );
};

export default MyDetails;
