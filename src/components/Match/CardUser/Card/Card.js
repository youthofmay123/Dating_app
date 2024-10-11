import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { shape, string, number } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Card.styles';
const Card = ({ card }) => (
    <View activeOpacity={1} style={styles.card}>
        <Image style={styles.image} source={card.photos[0].url} resizeMode="cover" />

        <View style={styles.photoDescriptionContainer}>
            <Text style={styles.text}>{`${card.name}, ${card.age}`}</Text>
            <View style={styles.textPronounsWrapper}>
                <Text style={styles.textPronouns}>{`${card.details.gender_pronouns.pronouns}`}</Text>
            </View>
            <View style={styles.textOccupationWrapper}>
                <Icon name="folder-o" style={{}} size={18} color={'#fff'}></Icon>
                <Text style={styles.textOccupation}>{`${card.details.occupation}`}</Text>
            </View>
        </View>
    </View>
);

Card.propTypes = {
    card: shape({
        // photos: ImageSourcePropType,
        name: string,
        age: number,
    }).isRequired,
};

export default Card;
