import {StyleSheet} from 'react-native';
import {FontSize, NumberValues} from '../../constants/FixedValues';
import {ColorCode} from '../../constants/ColorCode';

const DateComponentStyle = StyleSheet.create({
  showDatePicker: {
    borderWidth: NumberValues.CONSTANT_VALUE_1,
    borderRadius: NumberValues.CONSTANT_VALUE_10,
    height: NumberValues.CONSTANT_VALUE_50,
    backgroundColor: ColorCode.WHITE,
  },
  getDate: {
    padding: NumberValues.CONSTANT_VALUE_10,
    paddingTop: NumberValues.CONSTANT_VALUE_10,
    fontSize: NumberValues.CONSTANT_VALUE_20,
  },
  dateText: {fontSize: FontSize.FONT_20},
});

export default DateComponentStyle;
