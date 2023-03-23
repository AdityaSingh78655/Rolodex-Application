import {StyleSheet} from 'react-native';
import {FontSize, NumberValues} from '../../../constants/FixedValues';
import {ColorCode} from '../../../constants/ColorCode';

const TabIconStyle = StyleSheet.create({
  icon: {
    width: NumberValues.CONSTANT_VALUE_25,
    height: NumberValues.CONSTANT_VALUE_25,
  },
  activeIcon: {
    tintColor: ColorCode.RED,
    width: NumberValues.CONSTANT_VALUE_30,
    height: NumberValues.CONSTANT_VALUE_30,
  },
  label: {
    fontSize: FontSize.FONT_12,
    marginBottom: NumberValues.CONSTANT_VALUE_5,
  },
  activeLabel: {
    color: ColorCode.BLUE,
  },
});

export default TabIconStyle;
