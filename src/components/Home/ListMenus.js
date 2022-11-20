import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import TextC from './TextC';
import {SIZES, textVarient, COLOR, commonStyle} from '../../themes/color';
import {menus} from '../../data/dummyData';
import {plus} from '../../themes/icon';
export default function ListMenus() {
  const {width} = useWindowDimensions();
  const [menu, setMenu] = useState(menus);

  const styles = StyleSheet.create({
    container: {
      marginVertical: SIZES.margin,
    },
    card: {
      marginVertical: SIZES.margin,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    cardContainer: {
      margin: SIZES.margin - 10,
      width: '45%',
      elevation: 5,
      backgroundColor: COLOR.white,
      ...commonStyle.shadow,
      borderRadius: SIZES.radious,
      padding: SIZES.padding,
    },
    imageContainer: {
      alignItems: 'center',
    },
    imageStyle: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    priceAndAddToCartContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: SIZES.margin,
      justifyContent: 'space-between',
    },
    addToCartButton: {
      backgroundColor: COLOR.secondary,
      padding: SIZES.padding - 10,
      borderRadius: 50,
    },
  });

  const RenderItem = ({item}) => {
    console.log(item);
    return (
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.mimages[0]}} style={styles.imageStyle} />
        </View>
        <View>
          <TextC text={item.mname} fs={textVarient.S} />
        </View>
        <View style={styles.priceAndAddToCartContainer}>
          <TextC text={`₹${item.mprice}`} fs={textVarient.S} />
          <TouchableOpacity style={styles.addToCartButton}>
            <Image source={plus} style={commonStyle.smallIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TextC text={'Polular Now 🔥'} fs={textVarient.M} />
      <View style={styles.card}>
        {menu.map((item, index) => {
          return <RenderItem item={item} key={String(index)} />;
        })}
      </View>
    </View>
  );
}
