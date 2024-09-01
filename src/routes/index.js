import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login';
import AppleLogin from '../AppleLogin';
import FacebookLogin from '../FacebookLogin';
import PhoneLogin from '../PhoneLogin';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="AppleLogin" component={AppleLogin} />
                <Stack.Screen name="FacebookLogin" component={FacebookLogin} />
                <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
