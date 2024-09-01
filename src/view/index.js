import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Login from './login/Login';
function RootComponent() {
    return (
        <SafeAreaView>
            <View>
                <Login />
            </View>
        </SafeAreaView>
    );
}
export default RootComponent;
