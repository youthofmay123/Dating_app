import { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import datas from '../../constants/userDetail';
import { setCurrentUser } from '../../redux/userSlice';
import { database, collection, getDocs, query, where } from '../../firebase/config';
function Login() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async () => {
        try {
            // Tạo query Firestore để tìm kiếm user phù hợp
            const usersRef = collection(database, 'users');
            const q = query(usersRef, where('user_name', '==', userName), where('password', '==', password));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                // Lấy user đầu tiên từ query
                const user = querySnapshot.docs[0].data();
                dispatch(setCurrentUser(user));
                alert(`Xin chào ${user.name}`);
                navigation.navigate('Home');
            } else {
                alert('Tên đăng nhập hoặc mật khẩu không đúng');
            }
        } catch (error) {
            console.error('Error fetching user data: ', error);
            alert('Đã xảy ra lỗi khi đăng nhập');
        }
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>LOGIN</Text>
            </View>
            <TextInput
                type="text"
                value={userName}
                placeholder="User name input..."
                onChangeText={(text) => {
                    setUserName(text);
                }}
                style={{ borderWidth: 1, padding: 10, minWidth: 250, borderRadius: 10, margin: 10 }}
            />

            <TextInput
                secureTextEntry={true}
                textContentType="oneTimeCode" // Tránh gợi ý từ Authenticator
                autoComplete="off" // Tắt tự động đi
                value={password}
                placeholder="Password input..."
                onChangeText={(text) => {
                    setPassword(text);
                }}
                style={{ borderWidth: 1, padding: 10, minWidth: 250, borderRadius: 10, margin: 10 }}
            />

            <View style={{ flexDirection: 'row' }}>
                <Button onPress={handleClick} title={'Login'} buttonStyle={{ padding: 10, margin: 10 }} />
                <Button
                    onPress={() => navigation.navigate('Register')}
                    title={'Register'}
                    buttonStyle={{ padding: 10, margin: 10 }}
                />
            </View>
        </View>
    );
}

export default Login;
