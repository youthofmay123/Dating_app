import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconShield from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle } from 'react-native-svg';
import color from '../../color/color';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const InfoUser = () => {
    const navigation = useNavigation();
    const progress = 0.45;

    const radius = 50;
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - circumference * progress;

    return (
        <SafeAreaView style={styles.component}>
            <View style={styles.groupAvatar}>
                <Svg height="120" width="120" style={styles.percent}>
                    <Circle stroke="#e6e6e6" fill="none" cx="60" cy="60" r={radius} strokeWidth={strokeWidth} />
                    <Image source={require('../../../images/Frog.png')} style={styles.avatar} />
                    <Circle
                        stroke={color.primary}
                        fill="none"
                        cx="60"
                        cy="60"
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={progressOffset}
                        transform={`rotate(90 60 60)`}
                    />
                </Svg>
                <Text style={styles.complete}>{progress * 100}% complete</Text>
            </View>
            <View style={styles.groupInfo}>
                <View style={styles.groupName}>
                    <Text style={styles.name}>Joshua Edwards, 29</Text>
                    <IconShield name="shield-checkmark-sharp" size={15} style={{ paddingLeft: 5 }} color={'gray'} />
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
