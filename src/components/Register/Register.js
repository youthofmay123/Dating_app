import { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import datas from '../../constants/userDetail';
import { setCurrentUser } from '../../redux/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { database, collection, addDoc, query, where, getDocs } from '../../firebase/config';

function Register() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async () => {
        try {
            // Kiểm tra xem người dùng đã tồn tại trong Firestore chưa
            const userRef = collection(database, 'users');
            const userQuery = query(userRef, where('username', '==', userName));
            const snapshot = await getDocs(userQuery);

            if (!snapshot.empty) {
                alert('Tên người dùng đã tồn tại');
            } else {
                // Đăng ký người dùng với Firebase Authentication
                const auth = getAuth();
                const userCredential = await createUserWithEmailAndPassword(auth, userName, password);

                // Lưu thông tin người dùng vào Firestore
                await addDoc(userRef, {
                    username: userName,
                    password: password, // Lưu mật khẩu là không an toàn, nên mã hóa mật khẩu trước khi lưu
                });

                // Lưu thông tin người dùng vào Redux
                dispatch(setCurrentUser(userCredential.user));

                alert('Đăng ký thành công');
                navigation.navigate('Login');
            }
        } catch (error) {
            console.error(error);
            alert('Đã xảy ra lỗi, vui lòng thử lại');
        }
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>REGISTER</Text>
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
                <Button onPress={handleClick} title={'Register'} buttonStyle={{ padding: 10, margin: 10 }} />
                <Button
                    onPress={() => navigation.navigate('Login')}
                    title={'Login'}
                    buttonStyle={{ padding: 10, margin: 10 }}
                />
            </View>
        </View>
    );
}

export default Register;
