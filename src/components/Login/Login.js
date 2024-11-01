import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
function Login() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const handleClick = () => {
        navigation.navigate('Home');
    };
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <TextInput
                type="text"
                value={name}
                placeholder="Name input..."
                onChange={(e) => {
                    setName(e.target.value);
                }}
                style={{ borderWidth: 1, padding: 10, minWidth: 250, borderRadius: 10 }}
            />
            <Button onPress={handleClick} title={'Login'} buttonStyle={{ padding: 10, margin: 10 }} />
        </View>
    );
}

export default Login;
