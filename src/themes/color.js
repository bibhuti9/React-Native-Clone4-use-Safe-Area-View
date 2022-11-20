import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const COLOR = {
  primary: '#f54749',
  secondary: '#f65f61',
  black: '#000',
  white: '#fff',
  gray: '#bdbbbf',
  gray1: '#cfcdd1',
};

export const SIZES = {
  padding: 15,
  margin: 15,
  width,
  height,
  radious: 15,
};

export const textVarient = {
  L: 28,
  M: 25,
  S: 20,
  SM: 15,
};
export const commonStyle = {
  iconStyle: {
    height: 30,
    width: 30,
  },
  smallIcon: {
    height: 25,
    width: 25,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.65,
    elevation: 2,
  },
};
