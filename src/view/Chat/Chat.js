import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import styles from './styles';
import Messenger from '../../components/Chat/Messenger';
import Matches from '../../components/Chat/Matches';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import userDetail from '../../constants/userDetail';

const Chat = () => {
    const height = Dimensions.get('window').height;
    const [selectedUser, setSelectedUser] = useState();

    const currentUser = useSelector((state) => state.user.currentUser);
    const users = userDetail.filter((user) => user.id !== currentUser?.id);

    const data = [
        { id: '1', name: 'Maria White', lastSender: 'You', lastContent: 'Hello!', status: 'green' },
        { id: '2', name: 'Anna Fernandez', lastSender: 'Anna Fernandez', lastContent: "What's up!", status: 'grey' },
        { id: '3', name: 'Jennifer Brown', lastSender: 'You', lastContent: 'Gì đây!', status: 'yellow' },
        {
            id: '4',
            name: 'Jennifer Brown',
            lastSender: 'Jennifer Brown',
            lastContent: 'Đi lên trên kia chơi!',
            status: 'yellow',
        },
        { id: '5', name: 'Jennifer Brown', lastSender: 'You', lastContent: 'DÔ DIÊN!', status: 'yellow' },
        { id: '6', name: 'Jennifer Brown', lastSender: 'Jennifer Brown', lastContent: 'Thank you!', status: 'yellow' },
        { id: '7', name: 'Jennifer Brown', lastSender: 'Jennifer Brown', lastContent: 'Thank you!', status: 'yellow' },
        { id: '8', name: 'Jennifer Brown', lastSender: 'Jennifer Brown', lastContent: 'Thank you!', status: 'yellow' },
        { id: '9', name: 'Jennifer Brown', lastSender: 'Jennifer Brown', lastContent: 'Thank you!', status: 'yellow' },
        { id: '10', name: 'Jennifer Brown', lastSender: 'Jennifer Brown', lastContent: 'Thank you!', status: 'yellow' },
    ];

    return (
        <SafeAreaView style={styles.wrapper}>
            <Matches />
            <View style={styles.wrapperTitle}>
                <View style={styles.titleGroup}>
                    <Text style={styles.title}>Chats </Text>
                    <Text>(1)</Text>
                </View>
                <Icon name="filter-list" size={25} />
            </View>
            <ScrollView style={{ height: height * 0.6 }}>
                {users.map((item, index) => (
                    <Messenger item={item} key={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Chat;
