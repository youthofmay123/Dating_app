import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Item } from '../../components/Notify';

const Notify = () => {
    const favoriteUsers = useSelector((state) => state.user.favoriteUsers);

    return (
        <View style={styles.container}>
            <ScrollView style={{ padding: 15, flex: 1 }}>
                {/* Check if favoriteUsers exists and filter out any invalid objects */}
                {favoriteUsers && favoriteUsers.length > 0 ? (
                    favoriteUsers.map((user) => (
                        <Item
                            key={user.id}
                            photo={user.photos[0].url}
                            name={user.name}
                            pronouns={user.details.gender_pronouns.pronouns}
                            occupation={user.details.occupation}
                        />
                    ))
                ) : (
                    <Text style={styles.emptyText}>No favorite users yet.</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#888',
    },
});

export default Notify;
