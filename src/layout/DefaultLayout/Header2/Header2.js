import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import color from '../../../components/color/color';

const Header = () => {
    const progress = 0.45;
    return (
        <View style={styles.header}>
            <View style={styles.left}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="bars" size={22} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconRefresh}>
                    <Icon name="refresh" size={20} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>HeartSync</Text>
                <View style={styles.progressBar}>
                    <Progress.Bar
                        progress={progress}
                        width={138}
                        height={8}
                        color={color.primary}
                        unfilledColor={color.second}
                        borderWidth={0}
                        marginTop={10}
                    />

                    {/* <View style={styles.progressBarLeft}></View> */}
                    {/* <View style={styles.progressBarRight}></View> */}
                </View>
            </View>
            <TouchableOpacity style={styles.iconSliders}>
                <Icon name="sliders" size={20} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
