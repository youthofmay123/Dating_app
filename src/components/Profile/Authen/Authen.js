import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import color from '../../color/color';

const Authen = () => {
    return (
        <TouchableOpacity style={styles.component}>
            <View style={styles.iconShield}>
                <Icon1 name="shield-checkmark-sharp" color="#3299E5" size={30} />
            </View>
            <View style={styles.content}>
                <Text style={{ fontSize: 12, paddingBottom: 5 }}>
                    Vertification adds an extra layer of authenticity and trust to your profile.
                </Text>
                <Text style={{ fontSize: 12, color: color.primary, fontWeight: 'bold' }}>
                    {' '}
                    Verify your account now!
                </Text>
            </View>
            <Icon2 name="angle-right" color="#333" size={30} style={{ padding: 10 }} />
        </TouchableOpacity>
    );
};

export default Authen;
