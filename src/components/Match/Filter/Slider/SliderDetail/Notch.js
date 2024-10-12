import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

const Notch = props => {
  return (
    <View style={styles.root} {...props}/>
  );
};

export default memo(Notch);

const styles = StyleSheet.create({
  root: {
    // width: 0,
    // height: 0,
    // borderLeftColor: 'transparent',
    // borderRightColor: 'black',
    // borderTopColor: 'transparent',
    // borderLeftWidth: 4,
    // borderRightWidth: 4,
    // borderTopWidth: 8,
  },
});