import {StyleSheet} from 'react-native';
import {FontSize, NumberValues} from '../../constants/FixedValues';
import {ColorCode} from '../../constants/ColorCode';

const InputCompStyle = StyleSheet.create({
  mainView: {
    height: NumberValues.CONSTANT_VALUE_110,
  },
  name: {
    fontSize: FontSize.FONT_20,
    paddingVertical: NumberValues.CONSTANT_VALUE_10,
  },
  error: {
    color: ColorCode.RED,
    fontSize: FontSize.FONT_15,
    fontWeight: 'bold',
    marginTop: NumberValues.CONSTANT_VALUE_5,
  },
  placeholder: {
    fontSize: FontSize.FONT_20,
    borderWidth: NumberValues.CONSTANT_VALUE_1,
    paddingVertical: NumberValues.CONSTANT_VALUE_10,
    backgroundColor: ColorCode.WHITE,
    fontWeight: 'bold',
    borderRadius: NumberValues.CONSTANT_VALUE_10,
    padding: NumberValues.CONSTANT_VALUE_10,
  },
  addUser: {
    paddingTop: NumberValues.CONSTANT_VALUE_60,
    textAlign: 'center',
    fontSize: NumberValues.CONSTANT_VALUE_30,
    fontWeight: '800',
  },
});

export default InputCompStyle;
