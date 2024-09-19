import React from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import color from '../../components/color/color';
import * as Progress from 'react-native-progress';
import Photos from '../../components/Photos';
import AboutMe from '../../components/AboutMe';
import MyDetails from '../../components/MyDetails';
import IEnjoy from '../../components/IEnjoy';
import ICommunicate from '../../components/ICommunicate';
import LinkedAccounts from '../../components/LinkedAccounts';

const EditProfile = () => {
    const navigation = useNavigation();
    let complete = 0.45;

    return (
        <SafeAreaView style={{ backgroundColor: color.white }}>
            <View style={styles.header}>
                <Icon name="angle-left" size={30} style={styles.icon} onPress={() => navigation.navigate('Home')} />
                <Text style={styles.mainTitle}>Edit Profile</Text>
            </View>
            <ScrollView style={{ marginBottom: 90 }}>
                <View>
                    <View style={styles.complete}>
                        <View
                            style={{
                                flexDirection: 'row',
                            }}
                        >
                            <Text style={{ fontWeight: 'bold' }}>Profile completion: </Text>
                            <Text style={{ color: color.primary, fontWeight: 'bold' }}>{`${complete * 100}%`}</Text>
                        </View>
                        <Progress.Bar
                            progress={complete}
                            width={338}
                            height={10}
                            color={color.primary}
                            unfilledColor="#B2EBF2"
                            borderWidth={0}
                            marginTop={10}
                        />
                    </View>
                    <View style={styles.photos}>
                        <Photos />
                    </View>
                    <View style={styles.aboutMe}>
                        <AboutMe />
                    </View>
                    <View style={styles.myDetails}>
                        <MyDetails />
                    </View>
                    <View style={styles.iEnjoy}>
                        <IEnjoy />
                    </View>
                    <View style={styles.iCommunicate}>
                        <ICommunicate />
                    </View>
                    <View style={styles.linkedAccounts}>
                        <LinkedAccounts />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EditProfile;
