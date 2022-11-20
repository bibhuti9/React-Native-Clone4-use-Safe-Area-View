import {View, Text} from 'react-native';
import React from 'react';
import TextC from './TextC';
import {SIZES, COLOR, textVarient} from '../../themes/color';

export default function GreatingCardC() {
  return (
    <View style={{marginVertical: SIZES.margin}}>
      <View>
        <TextC text={'Good Morinig'} fs={textVarient.L} fc={COLOR.gray} />
        <TextC text={'Jagan 👋'} fs={textVarient.L} fc={COLOR.black} />
        <TextC
          text={`Let's eat high quality food todays`}
          fs={textVarient.SM}
          style={{marginVertical: SIZES.margin}}
        />
      </View>
    </View>
  );
}
