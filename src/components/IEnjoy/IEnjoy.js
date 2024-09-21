import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import Options from '../Options';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const IEnjoy = () => {
    const [valueInput, setValueInput] = useState('');
    const [optionValue, setOptionValue] = useState(['Coffee brewing', 'Trekking']);

    const handleWhenAdd = () => {
        if (optionValue.length >= 5) {
            alert('Maximun is 5 enjoy');
            return;
        }
        if (valueInput.trim() !== '') {
            setOptionValue((prevOptionValue) => [...prevOptionValue, valueInput]);
            setValueInput('');
        }
    };

    const handleRemoveOption = (indexToRemove) => {
        setOptionValue((prevOptions) => prevOptions.filter((_, index) => index !== indexToRemove));
    };

    return (
        <View>
            <Text style={styles.title}>I enjoy</Text>
            <Text style={styles.description}>Adding your interest is a great way to find like-minded connections.</Text>
            <View style={styles.groupInput}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#B0B0B0"
                    maxLength={20}
                    multiline={true}
                    value={valueInput}
                    onChangeText={(text) => setValueInput(text)}
                />
                <TouchableOpacity style={styles.add} onPress={handleWhenAdd}>
                    <Icon name="plus-circle" size={20} color={'gray'} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {optionValue.map((option, index) => (
                    <Options key={index} title={option} onRemove={() => handleRemoveOption(index)} />
                ))}
            </View>
        </View>
    );
};

export default IEnjoy;
