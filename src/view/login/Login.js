import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { avatar } from '../images/Cat.png';
import styles from './styles';
const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../images/Cat.png')} style={styles.logo} />
                <Text style={styles.title}>HeartSync</Text>
                <Text style={styles.subtitle}>Where Hearts Connect, Love Finds Its Sync.</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.appleButton]}>
                    <Icon name="apple" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Continue with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.facebookButton]}>
                    <Icon name="facebook" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.phoneButton]}>
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
export default Login;
