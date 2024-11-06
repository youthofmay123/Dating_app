import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
// import styles from './styles';
import { Item } from '../../components/Notify';
const Notify = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={{ padding: 15, flex: 1 }}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
export default Notify;
