import {StyleSheet} from 'react-native';
import {FontSize, NumberValues} from '../../constants/FixedValues';
import {ColorCode} from '../../constants/ColorCode';

const LoginScreenStyle = StyleSheet.create({
  headerView: {
    flex: NumberValues.CONSTANT_VALUE_1,
  },
  inputComponentView: {
    paddingHorizontal: NumberValues.CONSTANT_VALUE_30,
  },
  button: {
    padding: NumberValues.CONSTANT_VALUE_10,
    width: NumberValues.CONSTANT_VALUE_150,
    alignItems: 'center',
  },
  buttonView: {
    padding: NumberValues.CONSTANT_VALUE_30,
    alignItems: 'center',
  },
  loginButton: {
    color: ColorCode.WHITE,
    fontSize: FontSize.FONT_20,
    fontWeight: 'bold',
  },
  backGroundImage: {
    backgroundColor: ColorCode.TURQUOISE_BLUE,
    flex: NumberValues.CONSTANT_VALUE_1,
  },
  headerText: {
    fontSize: FontSize.FONT_25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: NumberValues.CONSTANT_VALUE_50,
  },
  image: {
    width: FontSize.FONT_100,
    height: FontSize.FONT_100,
    marginTop: NumberValues.CONSTANT_VALUE_50,
    marginLeft: NumberValues.CONSTANT_VALUE_150,
  },
  newUser: {
    marginLeft: NumberValues.CONSTANT_VALUE_30,
    fontSize: FontSize.FONT_20,
    color: ColorCode.BLUE,
  },
  register: {
    fontSize: FontSize.FONT_20,
    color: ColorCode.RED,
    top: NumberValues.CONSTANT_VALUE_1,
    bottom: NumberValues.CONSTANT_VALUE_5,
  },
  activityIndicator: {
    zIndex: NumberValues.CONSTANT_VALUE_2,
    bottom: NumberValues.CONSTANT_VALUE_350,
  },
  newUserView: {
    flexDirection: 'row',
  },
});

export default LoginScreenStyle;
