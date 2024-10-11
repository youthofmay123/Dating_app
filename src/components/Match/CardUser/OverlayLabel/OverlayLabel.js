import React from 'react';
import { View, Text } from 'react-native';
import { string } from 'prop-types';
import styles from './OverlayLabel.styles';
import Icon from 'react-native-vector-icons/Ionicons';

const OverlayLabel = ({ iconName, color }) => (
    <View style={[styles.overlayLabel, { backgroundColor: color }]}>
        {/* <Text style={[styles.overlayLabelText, { color }]}>{label}</Text> */}
        <Icon name={iconName} style={{ color: '#117B34' }} size={50} color={'#fff'}></Icon>
    </View>
);

OverlayLabel.propTypes = {
    iconName: string.isRequired,
    color: string.isRequired,
};

export default OverlayLabel;
