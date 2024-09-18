import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Icon name="angle-left" size={30} style={styles.icon} onPress={() => navigation.navigate('Home')} />
                <Text style={styles.title}>Edit Profile</Text>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.complete}></View>
                    <View style={styles.photos}></View>
                    <View style={styles.aboutMe}></View>
                    <View style={styles.myDetails}></View>
                    <View style={styles.iEnjoy}></View>
                    <View style={styles.iCommunicate}></View>
                    <View style={styles.linkedAccounts}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EditProfile;
