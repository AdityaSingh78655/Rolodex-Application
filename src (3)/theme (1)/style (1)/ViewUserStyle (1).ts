import {StyleSheet} from 'react-native';
import {NumberValues, FontSize} from '../../constants/FixedValues';
import {ColorCode} from '../../constants/ColorCode';

const ViewUserStyle = StyleSheet.create({
  mainView: {
    flex: NumberValues.CONSTANT_VALUE_1,
  },
  textHeader: {
    fontSize: NumberValues.CONSTANT_VALUE_20,
    textAlign: 'center',
    fontWeight: '600',
  },
  contentView: {
    alignItems: 'center',
    paddingTop: NumberValues.CONSTANT_VALUE_20,
  },
  image: {
    width: NumberValues.CONSTANT_VALUE_80,
    height: NumberValues.CONSTANT_VALUE_80,
    borderRadius: NumberValues.CONSTANT_VALUE_50,
  },
  text: {
    fontSize: FontSize.FONT_20,
    paddingTop: FontSize.FONT_20,
  },
  switchView: {
    flexDirection: 'row',
    paddingTop: NumberValues.CONSTANT_VALUE_20,
  },
  switchText: {
    fontSize: FontSize.FONT_20,
    color: ColorCode.RED,
    paddingLeft: NumberValues.CONSTANT_VALUE_10,
  },
  switch: {
    paddingTop: NumberValues.CONSTANT_VALUE_7,
  },
  favouriteText: {
    fontSize: NumberValues.CONSTANT_VALUE_20,
    marginLeft: NumberValues.CONSTANT_VALUE_10,
    color: ColorCode.WHITE,
    backgroundColor: ColorCode.GRAY,
    width: NumberValues.CONSTANT_VALUE_50,
    height: NumberValues.CONSTANT_VALUE_30,
    borderRadius: NumberValues.CONSTANT_VALUE_10,
    textAlign: 'center',
  },
});

export default ViewUserStyle;
