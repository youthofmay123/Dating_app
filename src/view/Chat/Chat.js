import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import styles from './styles';
import Messenger from '../../components/Chat/Messenger';
import Matches from '../../components/Chat/Matches';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { database } from '../../firebase/config';

const Chat =  () => {
    const height = Dimensions.get('window').height;

    const currentUser = useSelector((state) => state.user.currentUser);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchUsers = async () => {
        try {
            const usersRef = collection(database, "users");
            const snapshot = await getDocs(usersRef);
            const usersData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            const filteredUsers = usersData.filter((user) => user.id !== currentUser.id);
            setUsers(filteredUsers); // Lưu người dùng vào state
        } catch (error) {
            console.error("Lỗi khi lấy người dùng:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

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
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    users.map((item) => (
                        <Messenger item={item} key={item.id} />
                    ))
                )}
                
            </ScrollView> 
        </SafeAreaView>
    );
};

export default Chat;
