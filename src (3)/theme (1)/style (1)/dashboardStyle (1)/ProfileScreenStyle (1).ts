import {StyleSheet} from 'react-native';
import {FontSize, NumberValues} from '../../../constants/FixedValues';
import {ColorCode} from '../../../constants/ColorCode';

const ProfileScreenStyle = StyleSheet.create({
  header: {
    flex: NumberValues.CONSTANT_VALUE_1,
    alignItems: 'center',
    paddingTop: NumberValues.CONSTANT_VALUE_50,
  },
  image: {
    marginTop: NumberValues.CONSTANT_VALUE_70,
    borderRadius: NumberValues.CONSTANT_VALUE_90,
    height: NumberValues.CONSTANT_VALUE_150,
    width: NumberValues.CONSTANT_VALUE_150,
    paddingBottom: NumberValues.CONSTANT_VALUE_20,
  },
  buttonView: {
    flexDirection: 'row',
    paddingTop: NumberValues.CONSTANT_VALUE_40,
  },
  name: {
    fontSize: FontSize.FONT_25,
    paddingBottom: NumberValues.CONSTANT_VALUE_10,
  },
  mobileNo: {
    fontSize: FontSize.FONT_25,
  },
  editText: {
    // color: ColorCode.WHITE,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  editView: {
    shadowColor: ColorCode.GRAY,
    shadowOffset: {
      width: NumberValues.NEGATIVE_CONSTANT_VALUE_2,
      height: NumberValues.CONSTANT_VALUE_4,
    },
    shadowOpacity: NumberValues.DECIMAL_CONSTANT_VALUE_8,
    shadowRadius: NumberValues.CONSTANT_VALUE_3,
  },
  editImage: {
    marginTop: NumberValues.NEGATIVE_CONSTANT_VALUE_20,
    height: NumberValues.CONSTANT_VALUE_40,
    backgroundColor: ColorCode.WHITE,
    width: NumberValues.CONSTANT_VALUE_40,
    marginLeft: NumberValues.CONSTANT_VALUE_40,
  },
  editTouchable: {
    marginRight: NumberValues.CONSTANT_VALUE_40,
    marginLeft: NumberValues.CONSTANT_VALUE_40,
    marginTop: NumberValues.CONSTANT_VALUE_10,
    paddingTop: NumberValues.CONSTANT_VALUE_20,
    paddingBottom: NumberValues.CONSTANT_VALUE_20,
    backgroundColor: ColorCode.TURQUOISE_BLUE,
    borderRadius: NumberValues.CONSTANT_VALUE_20,
    width: NumberValues.CONSTANT_VALUE_80,
  },
  signOutView: {
    shadowColor: ColorCode.GRAY,
    shadowOffset: {
      width: NumberValues.NEGATIVE_CONSTANT_VALUE_2,
      height: NumberValues.CONSTANT_VALUE_4,
    },
    shadowOpacity: NumberValues.DECIMAL_CONSTANT_VALUE_8,
    shadowRadius: NumberValues.CONSTANT_VALUE_3,
  },
  signOutTouchable: {
    marginRight: NumberValues.CONSTANT_VALUE_40,
    marginLeft: NumberValues.CONSTANT_VALUE_40,
    marginTop: NumberValues.CONSTANT_VALUE_10,
    paddingTop: NumberValues.CONSTANT_VALUE_20,
    paddingBottom: NumberValues.CONSTANT_VALUE_20,
    backgroundColor: ColorCode.TURQUOISE_BLUE,
    borderRadius: NumberValues.CONSTANT_VALUE_20,
    width: NumberValues.CONSTANT_VALUE_80,
  },
  signOutText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ProfileScreenStyle;
