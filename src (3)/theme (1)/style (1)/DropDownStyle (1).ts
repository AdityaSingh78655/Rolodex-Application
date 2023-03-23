import {StyleSheet} from 'react-native';
import {FontSize, NumberValues} from '../../constants/FixedValues';
import {ColorCode} from '../../constants/ColorCode';

const DropDownStyle = StyleSheet.create({
  mainView: {flex: NumberValues.CONSTANT_VALUE_1},
  touchable: {
    height: NumberValues.CONSTANT_VALUE_45,
    borderRadius: NumberValues.CONSTANT_VALUE_10,
    borderWidth: NumberValues.CONSTANT_VALUE_1,
    marginTop: NumberValues.CONSTANT_VALUE_10,
    backgroundColor: ColorCode.WHITE,
  },
  selectView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: NumberValues.CONSTANT_VALUE_10,
    paddingTop: NumberValues.CONSTANT_VALUE_8,
  },
  text: {
    fontSize: NumberValues.CONSTANT_VALUE_20,
  },
  image: {
    height: NumberValues.CONSTANT_VALUE_20,
    width: NumberValues.CONSTANT_VALUE_30,
  },
  clicked: {
    width: NumberValues.CONSTANT_VALUE_330,
    height: NumberValues.CONSTANT_VALUE_300,
    borderRadius: NumberValues.CONSTANT_VALUE_10,
    marginTop: NumberValues.CONSTANT_VALUE_20,
    backgroundColor: ColorCode.WHITE,
    elevation: NumberValues.CONSTANT_VALUE_5,
    alignSelf: 'center',
  },
  selectName: {
    fontSize: FontSize.FONT_20,
    borderWidth: NumberValues.CONSTANT_VALUE_1,
    padding: NumberValues.CONSTANT_VALUE_5,
  },
});

export default DropDownStyle;
