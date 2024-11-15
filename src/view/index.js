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
import Filter from '../components/Match/Filter/index';
import Header1 from '../layout/DefaultLayout/Header1/Header1';
import Header2 from '../layout/DefaultLayout/Header2/Header2';
import Header3 from '../layout/DefaultLayout/Header3/Header3';
import HeaderFilterScreen from '../layout/DefaultLayout/HeaderFilterScreen/HeaderFilterScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../components/color/color';
import EditProfile from './Profile/EditProfiles';
import ProfileDetail from '../view/Match/Profile';
import Window from './Chat/Window';
import AuthProvider from '../Context/AuthProvider';
import Login from '../components/Login/Login';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Register from '../components/Register/Register';

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
                if (route.name === 'Notify') {
                    return <Header3 />;
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
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Signin" component={Signin} />
                    <Stack.Screen name="Home" component={TabNavigator} />
                    <Stack.Screen name="EditProfile" component={EditProfile} />
                    <Stack.Screen
                        name="Filter"
                        component={Filter}
                        options={{
                            headerShown: true,
                            headerTitle: '', // Đặt title thành rỗng để bỏ title mặc định
                            headerLeft: null, // Bỏ nút back (icon quay lại) mặc định
                            headerTitle: () => <HeaderFilterScreen />,
                        }}
                    />
                    <Stack.Screen
                        name="ProfileDetail"
                        component={ProfileDetail}
                        options={{
                            headerShown: true,
                            headerTitle: '', // Đặt title thành rỗng để bỏ title mặc định
                            headerLeft: null, // Bỏ nút back (icon quay lại) mặc định
                            headerTitle: () => <Header2 />,
                            headerStyle: {
                                height: 90, // Chiều cao tùy chỉnh cho header
                            },
                        }}
                    />
                    <Stack.Screen name="Window" component={Window} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default RootComponent;
