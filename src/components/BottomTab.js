import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {COLOR} from '../themes/color';

export default function BottomTab() {
  const {width} = useWindowDimensions();
  console.log(width / -8);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    top: {
      position: 'absolute',
      top: width / -5,
    },

    box: {
      backgroundColor: COLOR.primary,
      height: 80,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg
            height={200}
            width={width}
            viewBox="0 0 1440 320"
            style={styles.topWavy}>
            <Path
              fill={COLOR.primary}
              d="M0,256L48,266.7C96,277,192,299,288,304C384,309,480,299,576,256C672,213,768,139,864,106.7C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
}
