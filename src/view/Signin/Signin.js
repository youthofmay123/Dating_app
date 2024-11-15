import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { firebase } from '../../firebase/config';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({ navigation }) => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '522644652775-q2if4h3bpqhvbk650lhf0k2ik5nk9nj3.apps.googleusercontent.com', // ID OAuth từ Google
        redirectUri: 'https://auth.expo.io/@lamenecon/dating-app',
        extraParams: { prompt: 'consent' }, // Yêu cầu đồng ý mỗi khi đăng nhập
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
            firebase
                .auth()
                .signInWithCredential(credential)
                .then(async () => {
                    await AsyncStorage.setItem('userToken', id_token);
                    navigation.navigate('Home'); // Điều hướng đến trang chính sau khi đăng nhập thành công
                })
                .catch((error) => {
                    console.error('Google login error: ', error);
                });
        } else if (response?.type === 'error') {
            console.error('Error with Google login: ', response.params);
        }
    }, [response]);

    const handleGoogleLogin = () => {
        promptAsync();
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../images/logo.png')} style={styles.logo} />
                <View style={styles.borderLogo1}></View>
                <View style={styles.borderLogo2}></View>
                <Text style={styles.title}>HeartSync</Text>
                <Text style={styles.subtitle}>Where Hearts Connect, Love Finds Its Sync.</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleGoogleLogin}>
                    <Icon name="google" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.facebookButton]}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Icon name="facebook" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.phoneButton]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Icon name="user" size={20} color="#fff" />
                    <Text style={styles.buttonText}>UserName/Password</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    By signing up you agree to our <Text style={styles.linkText}>Terms and Conditions</Text>
                </Text>
                <Text style={styles.footerText}>
                    See how we use your data in our <Text style={styles.linkText}>Privacy Policy</Text>
                </Text>
            </View>
        </View>
    );
};

export default Signin;
