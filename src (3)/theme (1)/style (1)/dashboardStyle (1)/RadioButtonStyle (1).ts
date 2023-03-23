import {StyleSheet} from 'react-native';
import {FontSize, NumberValues} from '../../../constants/FixedValues';

const RadioButtonStyle = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    paddingTop: NumberValues.CONSTANT_VALUE_20,
  },
  text: {
    fontSize: FontSize.FONT_20,
    paddingTop: NumberValues.CONSTANT_VALUE_15,
    paddingRight: NumberValues.CONSTANT_VALUE_20,
  },
  radioForm: {
    paddingTop: NumberValues.CONSTANT_VALUE_10,
  },
});

export default RadioButtonStyle;
