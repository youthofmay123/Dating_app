import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PropTypes from 'prop-types';
import styles from './Item.styles';
import { TouchableOpacity } from 'react-native';

const Item = ({ photo, name, pronouns, occupation }) => {
    return (
        <View style={[styles.container]}>
            <View style={styles.avatar}>
                <Image style={styles.img} source={photo} />
            </View>
            <View style={styles.infor}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.pronouns}>
                    <Text style={{ width: '100%' }}>{pronouns}</Text>
                </View>
            </View>
            <View style={styles.occupation}>
                <Icon name="briefcase-outline" size={18} color={'#000'} />
                <Text style={{ paddingLeft: 5, paddingTop: 2 }}>{occupation}</Text>
            </View>
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
    pronouns: PropTypes.string,
    occupation: PropTypes.string,
};

export default Item;
