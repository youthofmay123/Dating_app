import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Signin = ({ navigation }) => {
    const handleNavigation = () => {
        navigation.navigate('Home'); // Điều hướng đến màn hình chứa TabNavigator
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
                <TouchableOpacity style={[styles.button, styles.appleButton]} onPress={handleNavigation}>
                    <Icon name="apple" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Continue with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={handleNavigation}>
                    <Icon name="facebook" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.phoneButton]} onPress={handleNavigation}>
                    <Icon name="phone" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Use phone number</Text>
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
