import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SubscriptionPlans from './SubscriptionPlans/SubscriptionPlans';
import Login from './Login/Login';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';

function RootComponent() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }} // Ẩn header cho tất cả các màn hình
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SubscriptionPlans">
                    {(props) => (
                        <DefaultLayout>
                            <SubscriptionPlans {...props} />
                        </DefaultLayout>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default RootComponent;
