import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.left}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="bars" size={22} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.progressBar}></View>
            </View>
            <TouchableOpacity style={styles.iconSliders}>
                <Icon name="gear" size={23} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
