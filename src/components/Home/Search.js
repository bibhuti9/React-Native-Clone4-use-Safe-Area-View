import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {search, filter} from '../../themes/icon';
import {commonStyle, SIZES, COLOR} from '../../themes/color';

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Image source={search} style={commonStyle.iconStyle} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.filterButtonStyle}>
        <Image source={filter} style={commonStyle.iconStyle} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.margin,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: COLOR.gray1,
    marginHorizontal: SIZES.margin,
    padding: SIZES.padding - 5,
    borderRadius: SIZES.radious,
  },
  filterButtonStyle: {
    backgroundColor: COLOR.secondary,
    padding: SIZES.padding - 5,
    borderRadius: SIZES.radious,
  },
});
