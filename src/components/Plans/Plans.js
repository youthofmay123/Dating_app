import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import color from '../../components/color/color';
import styles from './styles';

const Plans = () => {
    const [dataRow, setDataRow] = useState([
        {
            title: 'Unlimited swipes',
            free: false,
            premium: false,
        },
        {
            title: 'Advanced filters',
            free: false,
            premium: false,
        },
        {
            title: 'Remove ads',
            free: false,
            premium: false,
        },
        {
            title: 'Undo accidental left swipes',
            free: false,
            premium: false,
        },
        {
            title: 'Push you profile to more viewers',
            free: false,
            premium: false,
        },
    ]);

    // Hàm xử lý khi nhấn vào checkbox Free
    const handleCheckFree = (index) => {
        const updatedDataRow = [...dataRow];
        updatedDataRow[index].free = !updatedDataRow[index].free; // Đổi trạng thái của 'free' tại vị trí đó
        setDataRow(updatedDataRow);
    };

    // Hàm xử lý khi nhấn vào checkbox Premium
    const handleCheckPremium = (index) => {
        const updatedDataRow = [...dataRow];
        updatedDataRow[index].premium = !updatedDataRow[index].premium; // Đổi trạng thái của 'premium' tại vị trí đó
        setDataRow(updatedDataRow);
    };

    return (
        <View>
            <View style={styles.premiumBanner}>
                <Text style={styles.premiumTitle}>HeartSync Premium</Text>
                <Text style={styles.premiumSubtitle}>
                    Unlock exclusive features and supercharge your dating experience.
                </Text>
                <Button
                    title="Upgrade from $7.99"
                    buttonStyle={styles.upgradeButton}
                    titleStyle={{ color: 'gray', fontSize: 12 }}
                ></Button>
            </View>

            <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                    <Text style={styles.row1}>What's included</Text>
                    <Text style={styles.row2}>Free</Text>
                    <Text style={styles.row3}>Premium</Text>
                </View>
                {dataRow.map((data, index) => (
                    <View style={styles.tableRow} key={index}>
                        <Text style={styles.tableRowText}>{data.title}</Text>
                        <CheckBox
                            checked={data.free}
                            onPress={() => handleCheckFree(index)}
                            checkedColor={color.primary}
                        />
                        <CheckBox
                            checked={data.premium}
                            onPress={() => handleCheckPremium(index)}
                            checkedColor={color.primary}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Plans;
