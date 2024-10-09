import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import InfoUser from '../../components/InfoUser/InfoUser';
import styles from './styles';
import Authen from '../../components/Profile/Authen';
import Plans from '../../components/Profile/Plans';
import Safety from '../../components/Profile/Safety';

const SubscriptionPlans = () => {
    const [plans, setPlans] = useState(true);
    const [safety, setSafety] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <ScrollView>
                <View style={styles.user}>
                    <View style={styles.infoUser}>
                        <InfoUser />
                    </View>
                    <View style={styles.authen}>
                        <Authen />
                    </View>
                </View>
                <View style={styles.updateUser}>
                    <View style={styles.tabContainer}>
                        <Text
                            style={[styles.tabText, plans ? styles.activeTab : null]}
                            onPress={(e) => {
                                setPlans(true);
                                setSafety(false);
                            }}
                        >
                            Plans
                        </Text>
                        <Text
                            style={[styles.tabText, safety ? styles.activeTab : null]}
                            onPress={(e) => {
                                setSafety(true);
                                setPlans(false);
                            }}
                        >
                            Safety
                        </Text>
                    </View>

                    {plans && <Plans />}
                    {safety && <Safety />}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SubscriptionPlans;
