import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, OverlayLabel, Notify } from '../../../components/Match/CardUser';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Tag } from '../../../components/Match/Profile';
import styles from './Profile.styles';
const Profile = () => {
    const route = useRoute();
    const user = route.params?.user; // Lấy dữ liệu người dùng từ tham số nếu có

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
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap', // Cho phép các thành phần tự động xuống hàng
                            gap: 0, // Khoảng cách giữa các Tag (tùy chỉnh)
                        }}
                    >
                        <Tag text={'Nguyễn Nga'} color={'#EBFDFF'} />
                        <Tag text={'Nguyễn'} color={'#EBFDFF'} />
                        <Tag text={'Nguyễn Nga'} color={'#EBFDFF'} />
                        <Tag text={'Nguyễn Nga'} color={'#EBFDFF'} />
                        <Tag text={'Nguyễn Nga'} color={'#EBFDFF'} />
                        <Tag text={'Nguyễn'} color={'#EBFDFF'} />
                    </View>
                </View>
                {/* Enjoy */}
                <View style={styles.enjoyWrapper}>
                    <Text style={styles.title}>I enjoy</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap', // Cho phép các thành phần tự động xuống hàng
                            gap: 0, // Khoảng cách giữa các Tag (tùy chỉnh)
                        }}
                    >
                        <Tag icon={''} text={'Nguyễn Nga'} color={'#F3F4F6'} />
                        <Tag icon={''} text={'Nguyễn'} color={'#F3F4F6'} />
                        <Tag icon={''} text={'Nguyễn Nga'} color={'#F3F4F6'} />
                        <Tag icon={''} text={'Nguyễn Nga'} color={'#F3F4F6'} />
                        <Tag icon={''} text={'Nguyễn Nga'} color={'#F3F4F6'} />
                        <Tag icon={''} text={'Nguyễn'} color={'#F3F4F6'} />
                    </View>
                </View>
                {/* Comunicate in */}
                <View style={styles.comunicateWrapper}>
                    <Text style={styles.title}>I communicate in</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap', // Cho phép các thành phần tự động xuống hàng
                            gap: 0, // Khoảng cách giữa các Tag (tùy chỉnh)
                        }}
                    >
                        <Tag icon={''} text={'Nguyễn Nga'} color={'#F3F4F6'} />
                        <Tag icon={''} text={'Nguyễn'} color={'#F3F4F6'} />
                        <Tag icon={''} text={'Nguyễn Nga'} color={'#F3F4F6'} />
                        <Tag icon={''} text={'Nguyễn Nga'} color={'#F3F4F6'} />
                        <Tag icon={''} text={'Nguyễn Nga'} color={'#F3F4F6'} />
                        <Tag icon={''} text={'Nguyễn'} color={'#F3F4F6'} />
                    </View>
                </View>
                {/* Image */}
                <View style={styles.imageWrapper}>
                    <View style={{ width: '100%' }}>
                        <Image
                            style={{ flex: 1, width: '100%', height: 400, borderRadius: 5 }}
                            source={user.photos[0].url}
                            resizeMode="cover"
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '50%', paddingRight: 5, paddingTop: 5 }}>
                            <Image
                                style={{ flex: 1, width: '100%', height: 200, borderRadius: 5 }}
                                source={user.photos[0].url}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={{ width: '50%', paddingTop: 5 }}>
                            <Image
                                style={{ flex: 1, width: '100%', height: 200, borderRadius: 5 }}
                                source={user.photos[0].url}
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
