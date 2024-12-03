import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import color from '../../components/color/color'; // Đảm bảo bạn có file này chứa color


const ChatBot = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [response, setResponse] = useState('');
  
    const input = useRef(null);
  
    const sendMessageToDialogflow = async () => {
      const API_URL = 'https://api.dialogflow.com/v1/query?v=20170712';
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 0e6e3b1e7a2b4b0f8b4e7a2b4b0f8b4e',    
      };
      const body = JSON.stringify({
        query: inputMessage,
        lang: 'vi',
        sessionId: '1234567890',
      }); 
  
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: headers,
          body: body,
        });
        const result = await res.json();
        if (result.queryResult) {
          setResponse(result.queryResult.fulfillmentText);
        }
      } catch (error) {
        console.error('Error with Dialogflow API:', error);
      }
    };
    const handleClear = () => {
        setMessages([ ]); // Reset input message after sending
        input.current.focus(); // Focus lại vào input
    };

    return (
        <View style={styles.container}>
            {/* Hiển thị tin nhắn */}
            <ScrollView style={styles.messageContainer}>
                {messages.map((message, index) => (
                    <View
                        key={index}
                        style={[
                            styles.messageBubbleOfMe,
                            message.sender === 'user' ? styles.messageBubbleOfMe : styles.messageBubbleOfYou,
                        ]}
                    >
                        <Text style={styles.messageText}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Nhập tin nhắn */}
            <View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={handleClear}>
                        <FontAwesome name="times-circle" size={20} color={color.primary} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Type a message..."
                        ref={input}
                        style={styles.input}
                        value={inputMessage} // Bind the value to state
                        onChangeText={(text) => {
                            setInputMessage(text);
                        }}
                    />
                    <TouchableOpacity onPress={sendMessageToDialogflow}>
                        <FontAwesome name="send-o" size={20} color={color.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ChatBot;
