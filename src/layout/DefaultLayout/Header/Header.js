import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.left}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="bars" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconRefresh}>
                    <Icon name="refresh" size={20} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>HeartSync</Text>
                <View style={styles.progressBar}>
                    <View style={styles.progressBarLeft}></View>
                    <View style={styles.progressBarRight}></View>
                </View>
            </View>
            <TouchableOpacity style={styles.iconSliders}>
                <Icon name="sliders" size={20} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
