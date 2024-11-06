import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PropTypes from 'prop-types';
import styles from './Item.styles';
import { TouchableOpacity } from 'react-native';

const Item = ({ name, pronouns, occupation }) => {
    return (
        <View style={[styles.container]}>
            <View style={styles.avatar}>
                <Image />
            </View>
            <View style={styles.infor}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.pronouns}>{pronouns}</Text>
            </View>
            <Text style={styles.occupation}>{occupation}</Text>
        </View>
    );
};

Item.defaultProps = {
    // photo: require('../assets/image/user/Jodshua_Edwards.jpg'),
    name: 'Jodshua Edwards',
    pronouns: 'he/ him/ his',
    occupation: 'Business Analyst at Tech',
};

Item.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
};

export default Item;
