import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PropTypes from 'prop-types';
import styles from './Tag.styles';

const Tag = ({ icon, color, text }) => {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Icon name={icon} size={18} color="#000" />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

Tag.defaultProps = {
    icon: 'hands-pray',
    color: '#EBFDFF',
    text: 'No religious affiliation',
};

Tag.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
};

export default Tag;
