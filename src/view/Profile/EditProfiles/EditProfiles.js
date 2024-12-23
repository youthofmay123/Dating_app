import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import color from '../../../components/color/color';
import * as Progress from 'react-native-progress';
import Photos from '../../../components/Profile/EditProfiles/Photos';
import AboutMe from '../../../components/Profile/EditProfiles/AboutMe';
import MyDetails from '../../../components/Profile/EditProfiles/MyDetails';
import IEnjoy from '../../../components/Profile/EditProfiles/IEnjoy';
import ICommunicate from '../../../components/Profile/EditProfiles/ICommunicate';
import LinkedAccounts from '../../../components/Profile/EditProfiles/LinkedAccounts';

const EditProfile = () => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const progress = 0.45;

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
                            <Text style={{ color: color.primary, fontWeight: 'bold' }}>{`${progress * 100}%`}</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Progress.Bar
                                progress={progress}
                                width={width - 20}
                                height={10}
                                color={color.primary}
                                unfilledColor={color.second}
                                borderWidth={0}
                                marginTop={10}
                            />
                        </View>
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
