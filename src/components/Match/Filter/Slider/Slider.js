import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Slider from 'rn-range-slider';

import { Label, Notch, Rail, RailSelected, TextButton, Thumb } from './RangeSlider/index.js';

import styles from './Slider.styles.js';

const SliderScreen = (props) => {
    // const { min, max, disableRange, low, height } = props;
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(100);
    const [floatingLabel, setFloatingLabel] = useState(false);
    const renderThumb = useCallback((name) => <Thumb name={name} />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback((value) => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((lowValue, highValue) => {
        setLow(lowValue);
        setHigh(highValue);
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.horizontalContainer}>
                <Text style={styles.valueText}>{low}</Text>
                <Text style={styles.valueText}>{high}</Text>
            </View>
            <View style={styles.sliderContainer}>
                <Slider
                    style={styles.slider}
                    min={min}
                    max={max}
                    step={1}
                    disableRange={false}
                    renderThumb={renderThumb}
                    renderRail={renderRail}
                    renderRailSelected={renderRailSelected}
                    renderLabel={renderLabel}
                    renderNotch={renderNotch}
                    onValueChanged={handleValueChange}
                />
            </View>
        </View>
    );
};

export default SliderScreen;
