import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    const [text, setText] = React.useState('');
    return (
        <View style={styles.header}>
            <View style={styles.left}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="bars" size={22} />
                </TouchableOpacity>
            </View>
            <SafeAreaView>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={15} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
                        placeholder="Search"
                        placeholderTextColor="#666"
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Header;
