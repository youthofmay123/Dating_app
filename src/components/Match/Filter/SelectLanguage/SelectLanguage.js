import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './SelectLanguage.styles';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';
const Options = (props) => {
    const { onRemove, title } = props;
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#EBFDFF',
                borderRadius: 50,
                maxWidth: 150,
                marginVertical: 10,
                marginHorizontal: 5,
                paddingHorizontal: 5,
            }}
        >
            <Text style={{ padding: 10, color: '#00BDD6' }}>{title}</Text>
            <Icon name="times" size={15} color={'#00BDD6'} style={{ padding: 6 }} onPress={onRemove} />
        </View>
    );
};
const SelectLanguage = () => {
    const [optionValue, setOptionValue] = useState(['English', 'Spanish']);
    const [selectedValue, setSelectedValue] = useState('');

    const handleWhenAdd = () => {
        if (optionValue.length >= 5) {
            alert('Maximum is 5 items');
            return;
        }
        if (selectedValue && !optionValue.includes(selectedValue)) {
            setOptionValue((prevOptionValue) => [...prevOptionValue, selectedValue]);
            setSelectedValue(null); // Reset selected value
        }
    };

    const handleRemoveOption = (indexToRemove) => {
        setOptionValue((prevOptions) => prevOptions.filter((_, index) => index !== indexToRemove));
    };

    return (
        <View>
            <View style={styles.groupInput}>
                <RNPickerSelect
                    onValueChange={(value) => {
                        setSelectedValue(value);
                        handleWhenAdd(value); // Tự động thêm giá trị khi chọn
                    }}
                    items={[
                        { label: 'Vietnamese', value: 'Vietnamese' },
                        { label: 'Chinese', value: 'Chinese' },
                    ]}
                    style={{
                        inputAndroid: styles.input, // style cho Android
                        inputIOS: styles.input, // style cho iOS
                    }}
                    placeholder={{ label: 'Select languages', value: null }}
                    value={selectedValue}
                />
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {optionValue.map((option, index) => (
                    <Options key={index} title={option} onRemove={() => handleRemoveOption(index)} />
                ))}
            </View>
        </View>
    );
};

export default SelectLanguage;
