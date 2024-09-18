import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconShield from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const InfoUser = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.component}>
            <View style={styles.groupAvatar}>
                <Image source={require('../../images/Frog.png')} style={styles.avatar} />
                <Text style={styles.complete}>45% complete</Text>
            </View>
            <View style={styles.groupInfo}>
                <View style={styles.groupName}>
                    <Text style={styles.name}>Joshua Edwards, 29</Text>
                    <IconShield name="shield-checkmark-sharp" size={15} style={{ paddingLeft: 5 }} />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={styles.text}>Edit your profile</Text>
                    <Icon name="angle-right" style={{ paddingLeft: 8 }} size={15}></Icon>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default InfoUser;
