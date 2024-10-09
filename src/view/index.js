import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from './Profile';
import Match from './Match';
import Notify from './Notify';
import Chat from './Chat';
import Signin from './Signin';
import Header1 from '../layout/DefaultLayout/Header1/Header1';
import Header2 from '../layout/DefaultLayout/Header2/Header2';
import Header3 from '../layout/DefaultLayout/Header3/Header3';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../components/color/color';
import EditProfile from './Profile/EditProfiles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); // Sử dụng BottomTabNavigator

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
                let iconName;

                switch (route.name) {
                    case 'Profile':
                        iconName = 'user-o';
                        break;
                    case 'Match':
                        iconName = 'heart-o';
                        break;
                    case 'Notify':
                        iconName = 'bookmark-o';
                        break;
                    case 'Chat':
                        iconName = 'send-o';
                        break;
                    default:
                        iconName = 'send-o';
                        break;
                }

                return <Icon name={iconName} size={25} color={color} />;
            },
            headerTitle: () => {
                if (route.name === 'Profile') {
                    return <Header1 />;
                }
                if (route.name === 'Match') {
                    return <Header2 />;
                }
                if (route.name === 'Chat') {
                    return <Header3 />;
                }
            },
            headerStyle: {
                height: 85,
            },
            tabBarLabel: () => null,
            tabBarActiveTintColor: color.primary,
            tabBarInactiveTintColor: color.black,
        })}
    >
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Match" component={Match} />
        <Tab.Screen name="Notify" component={Notify} />
        <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
);

function RootComponent() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Signin" component={Signin} />
                    <Stack.Screen name="Home" component={TabNavigator} />
                    <Stack.Screen name="EditProfile" component={EditProfile} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default RootComponent;
