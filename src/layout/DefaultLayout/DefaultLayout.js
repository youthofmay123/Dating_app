import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './styles';

const DefaultLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>
            <View style={styles.body}>{children}</View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    );
};

export default DefaultLayout;
