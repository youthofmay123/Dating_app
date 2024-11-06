import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Slider from './Slider/index.js';
import { Button, CheckBox, Switch } from 'react-native-elements';
import { useState } from 'react';

import SelectLanguage from './SelectLanguage/SelectLanguage.js';
import styles from './Filter.styles.js';

const Filter = () => {
    // Initialize state for gender selection
    const [dataRow, setDataRow] = useState([
        { title: 'Male', status: false },
        { title: 'Female', status: false },
        { title: 'Nonbinary', status: false },
    ]);

    // Function to handle checkbox toggle
    const handleCheckFree = (index) => {
        setDataRow((prevDataRow) =>
            prevDataRow.map((item, idx) => (idx === index ? { ...item, status: !item.status } : item)),
        );
    };

    // Initialize state for the switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    // Function to handle "Apply Filters" button click
    const handleApplyFilters = () => {
        Alert.alert('Filters applied successfully!');
    };

    // Function to handle "Clear all" button click
    const handleClearAll = () => {
        setDataRow(dataRow.map((item) => ({ ...item, status: false })));
        Alert.alert('All filters cleared!');
    };

    return (
        <View style={styles.container}>
            {/* Scrollable content containing filter sections */}
            <ScrollView style={{ flex: 1, padding: 15 }}>
                {/* Gender selection section */}
                <View style={[styles.genderWrapper, styles.wrapper]}>
                    <Text style={styles.title}>What is your preferred gender?</Text>
                    <View style={styles.borderBox}>
                        <View style={styles.tableContainer}>
                            {dataRow.map((data, index) => (
                                <View style={styles.tableRow} key={index}>
                                    <Text style={styles.tableRowText}>{data.title}</Text>
                                    <CheckBox
                                        checked={data.status}
                                        onPress={() => handleCheckFree(index)}
                                        checkedColor={'#00BDD6'}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Age range selection section */}
                <View style={[styles.ageWrapper, styles.wrapper]}>
                    <Text style={styles.title}>Age range:</Text>
                    <View style={styles.borderBox}>
                        <Slider style={styles.borderBox} min={0} max={100} disableRange={false} height={50} />
                    </View>
                </View>

                {/* Distance selection section */}
                <View style={[styles.distanceWrapper, styles.wrapper]}>
                    <Text style={styles.title}>Distance:</Text>
                    <View style={styles.borderBox}>
                        <Slider min={0} max={100} disableRange={true} height={50} />
                        <View style={styles.switch}>
                            <View style={styles.switchTitle}>
                                <Text>Show profiles within a 15-km range when run out of matches.</Text>
                            </View>
                            <Switch
                                trackColor={{ false: '#767577', true: '#00BDD6' }} // Background color for the switch
                                thumbColor={isEnabled ? '#fff' : '#f4f3f4'} // Color of the switch thumb
                                value={isEnabled}
                                onValueChange={toggleSwitch}
                            />
                        </View>
                    </View>
                </View>

                {/* Language selection section */}
                <View style={styles.languageWrapper}>
                    <Text style={styles.title}>Language:</Text>
                    <SelectLanguage />
                </View>
            </ScrollView>

            {/* Footer containing buttons to apply or clear filters */}
            <View style={styles.footer}>
                <Button
                    buttonStyle={[styles.btnClear, styles.btn]}
                    titleStyle={{ color: 'gray' }}
                    title="Clear all"
                    onPress={handleClearAll} // Call the function to clear all filters
                />
                <Button
                    buttonStyle={[styles.btnApply, styles.btn]}
                    title="Apply Filters"
                    onPress={handleApplyFilters} // Call the function to apply filters
                />
            </View>
        </View>
    );
};

export default Filter;
