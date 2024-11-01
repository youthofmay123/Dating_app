import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import Messenger from '../../components/Chat/Messenger';
import Matches from '../../components/Chat/Matches';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Chat = () => {
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
            <View style={{ height: 300 }}>
                <FlatList
                    showsVerticalScrollIndicator={true}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Messenger {...item} />}
                />
            </View>
        </SafeAreaView>
    );
};

export default Chat;
