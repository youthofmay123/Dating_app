import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';

const Photos = () => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
        <>
            <View style={{ paddingBottom: 10 }}>
                <Text style={styles.title}>Photos</Text>
                <Text style={styles.description}>The main photo is how you appear to others on the swipe view</Text>
            </View>
            <View
                style={{
                    alignItems: 'center',
                    width: '100%',
                    height: '85%',
                }}
            >
                <View style={{ flexDirection: 'row', width: width - 20, height: '100%' }}>
                    <TouchableOpacity
                        style={[styles.image, { width: width * 0.65, justifyContent: 'center', alignItems: 'center' }]}
                    >
                        <Text style={styles.iconAdd}>+</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', justifyContent: 'space-between', paddingLeft: 15 }}>
                        <TouchableOpacity style={[styles.image, { width: width * 0.25, height: 90 }]}>
                            <Text style={styles.iconAdd}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.image, { width: width * 0.25, height: 90 }]}>
                            <Text style={styles.iconAdd}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.image, { width: width * 0.25, height: 90 }]}>
                            <Text style={styles.iconAdd}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Photos;
