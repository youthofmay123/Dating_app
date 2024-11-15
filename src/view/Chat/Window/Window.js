import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons, AntDesign, Entypo, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import color from '../../../components/color/color';
import { useNavigation } from '@react-navigation/native';
import { database, collection, addDoc, onSnapshot, query, orderBy } from '../../../firebase/config';
import { useState, useEffect, useRef } from 'react';
const Window = () => {
    const navigation = useNavigation();

    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const input = useRef(); // Tham chiếu tới input để focus
    useEffect(() => {
        const messagesRef = collection(database, 'messages');
        const unsubscribe = onSnapshot(
            query(messagesRef, orderBy('createdAt')), // Sắp xếp theo trường 'createdAt'
            (snapshot) => {
                let getMsg = [];
                snapshot.forEach((doc) => {
                    getMsg.push(doc.data());
                });
                setMessages(getMsg); // Cập nhật danh sách tin nhắn
            },
        );
        return () => unsubscribe();
    }, []);
    const handleSendMessage = async () => {
        if (inputMessage.trim()) {
            try {
                await addDoc(collection(database, 'messages'), {
                    message: inputMessage,
                    createdAt: new Date(),
                });
                setInputMessage(''); // Reset input message after sending
                input.current.focus(); // Focus lại vào input
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.groupAction}>
                    <TouchableOpacity>
                        <Ionicons
                            name="arrow-back"
                            size={24}
                            color="black"
                            onPress={() => {
                                navigation.navigate('Chat');
                            }}
                        />
                    </TouchableOpacity>
                    <View style={styles.groupActionRight}>
                        <TouchableOpacity>
                            <AntDesign name="videocamera" size={20} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo name="dots-three-vertical" size={15} color="black" style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.info}>
                    <Image
                        source={require('../../../images/Cat.png')} // Replace with actual image URL or local image
                        style={styles.avatar}
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>
                            Ava Jones, 25 <Ionicons name="checkmark-circle" size={16} color="blue" />
                        </Text>
                        <Text style={styles.userPronouns}>she/ her/ hers</Text>
                        <Text style={styles.userJob}>
                            <Feather name="folder" size={15} color="gray" /> Business Analyst at Tech
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.profileButton}>
                        <Ionicons name="chevron-forward" size={24} color={color.primary} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.messageContainer}>
                {messages.map((msg, index) => (
                    <View key={index} style={styles.messageBubbleOfMe}>
                        <Text style={styles.timeLabel}>
                            {msg.createdAt
                                ? new Date(msg.createdAt.seconds * 1000).toLocaleTimeString([], {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                      hour12: true,
                                  })
                                : ''}
                        </Text>
                        <Text style={styles.messageText}>{msg.message}</Text>
                    </View>
                ))}
            </ScrollView>

            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Type a message..."
                        ref={input}
                        style={styles.input}
                        value={inputMessage} // Bind the value to state
                        onChangeText={(text) => {
                            setInputMessage(text);
                        }}
                    />
                    <TouchableOpacity>
                        <FontAwesome name="smile-o" size={20} color="teal" />
                    </TouchableOpacity>
                </View>
                <View style={styles.groupSend}>
                    <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <FontAwesome name="plus-circle" size={20} color={color.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name="lightbulb-outline" size={20} color={color.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="picture" size={20} color={color.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="camerao" size={20} color={color.primary} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="mic-outline" size={20} color={color.primary} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <FontAwesome name="send-o" size={20} color={color.primary} onPress={handleSendMessage} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Window;
