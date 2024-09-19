import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const Photos = () => {
    return (
        <>
            <View style={{ paddingBottom: 10 }}>
                <Text style={styles.title}>Photos</Text>
                <Text style={styles.description}>The main photo is how you appear to others on the swipe view</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <TouchableOpacity>
                    <Text style={[styles.image, { width: 230, height: 290 }]}>+</Text>
                </TouchableOpacity>
                <View style={{ width: '100%', justifyContent: 'space-between', paddingLeft: 15 }}>
                    <TouchableOpacity>
                        <Text style={[styles.image, { width: 90, height: 90 }]}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.image, { width: 90, height: 90 }]}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.image, { width: 90, height: 90 }]}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default Photos;
