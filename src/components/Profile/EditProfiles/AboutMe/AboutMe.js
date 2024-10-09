import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import { useState } from 'react';

const AboutMe = () => {
    const [aboutMeText, setAboutMeText] = useState('');
    return (
        <View>
            <Text style={styles.title}>About me</Text>
            <Text style={styles.description}>Make it easy for others to get a sense of who you are</Text>
            <TextInput
                style={styles.textArea}
                placeholder="Share a few words about yourself, your interests, and what you're looking for in a connection..."
                placeholderTextColor="#B0B0B0"
                multiline={true}
                numberOfLines={5}
                value={aboutMeText}
                onChangeText={(text) => setAboutMeText(text)}
            />
        </View>
    );
};

export default AboutMe;
