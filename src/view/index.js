import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SubscriptionPlans from './SubscriptionPlans';
import Signin from './Signin';
import DefaultLayout from '../layout/DefaultLayout';

function RootComponent() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Signin"
                screenOptions={{ headerShown: false }} // Ẩn header cho tất cả các màn hình
            >
                <Stack.Screen name="Signin" component={Signin} />
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
