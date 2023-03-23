import {StyleSheet} from 'react-native';
import {NumberValues, FontSize} from '../../constants/FixedValues';

const SplashScreenStyle = StyleSheet.create({
  header: {
    flex: NumberValues.CONSTANT_VALUE_1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: FontSize.FONT_100,
    height: FontSize.FONT_100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: NumberValues.CONSTANT_VALUE_50,
  },
  text: {
    fontSize: FontSize.FONT_25,
  },
});

export default SplashScreenStyle;
