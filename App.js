import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  SafeAreaProvider,
  InitialWindowMetrics,
} from 'react-native-safe-area-context';

import React from 'react';
import HeaderC from './src/components/Home/HeaderC';
import {menu, search} from './src/themes/icon';
import GreatingCardC from './src/components/Home/GreatingCardC';
import {SIZES, COLOR} from './src/themes/color';
import Search from './src/components/Home/Search';
import ListMenus from './src/components/Home/ListMenus';
import BottomTab from './src/components/BottomTab';
import StatusBarC from './src/components/commonComponents/StatusBarC';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={InitialWindowMetrics}>
      <StatusBarC backgroundColor={COLOR.primary} />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <BottomTab />
        <View style={styles.container}>
          <HeaderC leftIcon={menu} rightIcon={search} />
          <GreatingCardC />
          <Search />
          <ListMenus />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.margin,
  },
});
