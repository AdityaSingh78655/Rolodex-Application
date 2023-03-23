import {StyleSheet} from 'react-native';
import {FontSize, NumberValues} from '../../constants/FixedValues';
import {ColorCode} from '../../constants/ColorCode';

const EditUserStyle = StyleSheet.create({
  headerView: {
    flex: NumberValues.CONSTANT_VALUE_1,
  },
  registrationView: {
    paddingTop: NumberValues.CONSTANT_VALUE_70,
    paddingBottom: NumberValues.CONSTANT_VALUE_20,
  },
  registrationText: {
    fontSize: NumberValues.CONSTANT_VALUE_25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editView: {
    flexDirection: 'row',
    paddingTop: NumberValues.CONSTANT_VALUE_20,
    paddingBottom: NumberValues.CONSTANT_VALUE_10,
    paddingHorizontal: NumberValues.CONSTANT_VALUE_20,
  },
  editIcon: {
    transform: [{scale: NumberValues.DECIMAL_CONSTANT_VALUE_8}],
  },
  editText: {
    fontSize: NumberValues.CONSTANT_VALUE_25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: NumberValues.CONSTANT_VALUE_60,
    paddingTop: NumberValues.CONSTANT_VALUE_10,
  },
  imagePicker: {
    alignItems: 'center',
  },
  inputComponentView: {
    paddingHorizontal: NumberValues.CONSTANT_VALUE_30,
  },
  button: {
    padding: NumberValues.CONSTANT_VALUE_10,
    width: NumberValues.CONSTANT_VALUE_100,
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
    paddingTop: NumberValues.CONSTANT_VALUE_50,
    paddingBottom: NumberValues.CONSTANT_VALUE_10,
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
    top: NumberValues.CONSTANT_VALUE_2,
  },
  countryText: {
    fontSize: NumberValues.CONSTANT_VALUE_20,
    paddingBottom: NumberValues.CONSTANT_VALUE_10,
  },
  stateText: {
    fontSize: NumberValues.CONSTANT_VALUE_20,
    paddingBottom: NumberValues.CONSTANT_VALUE_10,
  },
  cityText: {
    fontSize: NumberValues.CONSTANT_VALUE_20,
    paddingBottom: NumberValues.CONSTANT_VALUE_10,
  },
  pincode: {
    fontSize: NumberValues.CONSTANT_VALUE_20,
    paddingTop: NumberValues.CONSTANT_VALUE_15,
    paddingBottom: NumberValues.CONSTANT_VALUE_10,
  },
  TextInput: {
    borderWidth: NumberValues.CONSTANT_VALUE_1,
    padding: NumberValues.CONSTANT_VALUE_10,
    borderRadius: NumberValues.CONSTANT_VALUE_10,
    backgroundColor: ColorCode.WHITE,
    fontSize: NumberValues.CONSTANT_VALUE_20,
    fontWeight: 'bold',
  },
});

export default EditUserStyle;
