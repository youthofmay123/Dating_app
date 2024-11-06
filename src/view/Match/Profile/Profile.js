import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, OverlayLabel, Notify } from '../../../components/Match/CardUser';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Tag } from '../../../components/Match/Profile';
import styles from './Profile.styles';

// Hàm lấy icon theo từng loại chi tiết
const getIconAndColor = (key) => {
    switch (key) {
        case 'occupation':
            return { icon: 'briefcase-outline', color: '#EBFDFF' };
        case 'gender_pronouns':
            return { icon: 'gender-male-female', color: '#FDF2F2' };
        case 'education':
            return { icon: 'school-outline', color: '#F5F2FD' };
        case 'location':
            return { icon: 'map-marker', color: '#EBFDFF' };
        case 'height':
            return { icon: 'human-male-height-variant', color: '#EBFDFF' };
        case 'smoking':
            return { icon: 'smoking', color: '#FDF2F2' };
        case 'drinking':
            return { icon: 'glass-wine', color: '#F3F4F6' };
        case 'pets':
            return { icon: 'cat', color: '#EBFDFF' };
        case 'children':
            return { icon: 'baby-face-outline', color: '#F1F8FD' };
        case 'zodiac_sign':
            return { icon: 'star-outline', color: '#EBFDFF' };
        case 'religion':
            return { icon: 'hands-pray', color: '#F5F2FD' };
        default:
            return { icon: 'information-outline', color: '#808080' };
    }
};

const Profile = () => {
    const route = useRoute();
    const user = route.params?.user; // Lấy dữ liệu người dùng từ tham số nếu có

    // Lọc và tạo danh sách các chi tiết không null
    const detailTags = Object.entries(user.details || {})
        .filter(([key, value]) => value !== null)
        .map(([key, value]) => {
            const displayValue = typeof value === 'object' ? `${value.identity} (${value.pronouns})` : value;
            return { key, displayValue };
        });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: 15 }}>
                {/* Card */}
                <View style={styles.cardWrapper}>
                    {user ? (
                        <Card card={user} /> // Truyền dữ liệu người dùng vào Card
                    ) : (
                        <Text>No user data available</Text> // Hiển thị nếu không có dữ liệu người dùng
                    )}
                </View>
                {/* Location */}
                <View style={styles.locationWrapper}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="location-pin" color={'#DE3B40'} size={15} />
                        <Text style={{ paddingLeft: 6 }}>2.0 kilometres away</Text>
                    </View>
                    <Text style={[styles.title, { paddingBottom: -15 }]}>{user.details.location}</Text>
                </View>
                {/* About */}
                <View style={styles.aboutWrapper}>
                    <Text style={styles.title}>About me</Text>
                    <Text style={{ opacity: 0.7 }}>{user.about_me}</Text>
                </View>
                {/* Details */}
                <View style={styles.detailsWrapper}>
                    <Text style={styles.title}>My details</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 0 }}>
                        {detailTags.map(({ key, displayValue }, index) => {
                            const { icon, color } = getIconAndColor(key); // Get both icon and color
                            return <Tag key={index} icon={icon} color={color} text={displayValue} />;
                        })}
                    </View>
                </View>
                {/* Enjoy */}
                <View style={styles.enjoyWrapper}>
                    <Text style={styles.title}>I enjoy</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 0 }}>
                        {user.interests?.map((tag, index) => (
                            <Tag icon={''} key={index} text={tag} color={'#F3F4F6'} />
                        ))}
                    </View>
                </View>
                {/* Communicate in */}
                <View style={styles.communicateWrapper}>
                    <Text style={styles.title}>I communicate in</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 0 }}>
                        {user.languages?.map((tag, index) => (
                            <Tag icon={''} key={index} text={tag} color={'#F3F4F6'} />
                        ))}
                    </View>
                </View>
                {/* Image */}
                <View style={styles.imageWrapper}>
                    <View style={{ width: '100%' }}>
                        <Image
                            style={{ flex: 1, width: '100%', height: 400, borderRadius: 5 }}
                            source={{ uri: user.photos[0].url }}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '50%', paddingRight: 5, paddingTop: 5 }}>
                            <Image
                                style={{ flex: 1, width: '100%', height: 200, borderRadius: 5 }}
                                source={{ uri: user.photos[1].url }}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={{ width: '50%', paddingTop: 5 }}>
                            <Image
                                style={{ flex: 1, width: '100%', height: 200, borderRadius: 5 }}
                                source={{ uri: user.photos[2].url }}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                </View>
                {/* Button */}
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: '#FDF2F2', shadowColor: '#DE3B40' }]}>
                        <Icon name="close" size={30} color={'#DE3B40'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: '#EEFDF3', shadowColor: '#117B34' }]}>
                        <Icon name="done" size={30} color={'#117B34'} />
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', marginBottom: 50 }}>
                    <Text style={styles.title}>Hide and Report Profile</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
