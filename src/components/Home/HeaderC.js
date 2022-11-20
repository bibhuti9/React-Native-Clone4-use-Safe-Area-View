import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {commonStyle, SIZES} from '../../themes/color';

export default function HeaderC({leftIcon, rightIcon}) {
  return (
    <View style={styles.container}>
      <Image source={leftIcon} style={commonStyle.iconStyle} />
      <Image source={rightIcon} style={commonStyle.iconStyle} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.margin,
  },
});
