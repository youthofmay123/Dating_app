import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Label = ({ text, ...restProps }) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingBottom: 3,
    backgroundColor: 'transparent',
    borderRadius: 4,
  },
  text: {
    fontSize: 15,
    color: '#9CA0AA',
  },
});

export default memo(Label);