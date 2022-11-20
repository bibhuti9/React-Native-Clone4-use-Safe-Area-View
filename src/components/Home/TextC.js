import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES, COLOR, textVarient} from '../../themes/color';
export default function TextC({
  text,
  style,
  fs = textVarient.M,
  fc = COLOR.black,
  fw,
}) {
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: fs,
      color: fc,
      fontWeight: fw,
      ...style,
    },
  });
  return <Text style={styles.textStyle}>{text}</Text>;
}
