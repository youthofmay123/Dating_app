import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const HeaderFilterScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Icon name="close" size={25} style={styles.icon} onPress={() => navigation.goBack()} />
            </TouchableOpacity>
            <View style={styles.title}>
                <Text style={styles.mainTitle}>Filters</Text>
            </View>
        </View>
    );
};

export default HeaderFilterScreen;
