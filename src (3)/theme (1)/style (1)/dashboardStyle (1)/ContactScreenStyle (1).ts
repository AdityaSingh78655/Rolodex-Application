import {StyleSheet} from 'react-native';
import {FontSize, NumberValues} from '../../../constants/FixedValues';
import {ColorCode} from '../../../constants/ColorCode';

const ContactScreenStyle = StyleSheet.create({
  rightSwipeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onEditTouchable: {
    backgroundColor: ColorCode.GREEN,
    height: NumberValues.CONSTANT_VALUE_80,
    alignItems: 'center',
    justifyContent: 'center',
    width: NumberValues.CONSTANT_VALUE_70,
  },
  onDeleteTouchable: {
    backgroundColor: ColorCode.RED,
    height: NumberValues.CONSTANT_VALUE_80,
    justifyContent: 'center',
    width: NumberValues.CONSTANT_VALUE_70,
    alignItems: 'center',
  },
  onEditTouchableText: {
    paddingRight: NumberValues.CONSTANT_VALUE_10,
    fontSize: FontSize.FONT_20,
    color: ColorCode.WHITE,
  },
  emptyText: {
    textAlign: 'center',
    color: ColorCode.GRAY,
    fontSize: NumberValues.CONSTANT_VALUE_20,
    marginTop: NumberValues.CONSTANT_VALUE_200,
    fontWeight: '600',
  },
  onDeleteTouchableText: {
    fontSize: FontSize.FONT_20,
    color: ColorCode.WHITE,
  },
  swipableTouchable: {
    paddingLeft: NumberValues.CONSTANT_VALUE_5,
    borderBottomWidth: NumberValues.CONSTANT_VALUE_1,
    borderBottomColor: 'grey',
  },
  TouchableView: {flexDirection: 'row'},
  firstNameFontSize: {
    fontSize: FontSize.FONT_20,
  },
  lastNameFontSize: {
    fontSize: FontSize.FONT_20,
  },
  phoneNumberText: {
    fontSize: FontSize.FONT_20,
    paddingBottom: NumberValues.CONSTANT_VALUE_10,
    marginVertical: NumberValues.CONSTANT_VALUE_8,
    paddingLeft: NumberValues.CONSTANT_VALUE_50,
    marginTop: NumberValues.NEGATIVE_CONSTANT_VALUE_20,
  },
  modalNoButton: {
    marginTop: NumberValues.CONSTANT_VALUE_20,
    backgroundColor: ColorCode.GREEN,
    fontSize: NumberValues.CONSTANT_VALUE_30,
    color: ColorCode.WHITE,
    paddingTop: NumberValues.CONSTANT_VALUE_5,
    fontWeight: '600',
    width: NumberValues.CONSTANT_VALUE_100,
    textAlign: 'center',
    height: NumberValues.CONSTANT_VALUE_50,
  },
  modalYesButton: {
    marginTop: NumberValues.CONSTANT_VALUE_20,
    backgroundColor: ColorCode.RED,
    fontSize: NumberValues.CONSTANT_VALUE_30,
    color: ColorCode.WHITE,
    paddingTop: NumberValues.CONSTANT_VALUE_5,
    fontWeight: '600',
    width: NumberValues.CONSTANT_VALUE_100,
    textAlign: 'center',
    height: NumberValues.CONSTANT_VALUE_50,
  },
  modalText: {
    fontSize: FontSize.FONT_25,
    fontWeight: '600',
  },
  modalView: {
    flex: NumberValues.CONSTANT_VALUE_1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    position: 'absolute',
    right: NumberValues.CONSTANT_VALUE_10,
    top: NumberValues.CONSTANT_VALUE_10,
  },
  editImage: {
    tintColor: ColorCode.BLUE,
  },
  mainView: {
    marginTop: NumberValues.CONSTANT_VALUE_10,
    flex: NumberValues.CONSTANT_VALUE_1,
  },
  flatListView: {
    flex: NumberValues.CONSTANT_VALUE_1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: NumberValues.CONSTANT_VALUE_30,
    fontWeight: '800',
    paddingBottom: NumberValues.CONSTANT_VALUE_30,
  },
  editButtonView: {
    bottom: NumberValues.CONSTANT_VALUE_200,
    marginRight: NumberValues.CONSTANT_VALUE_10,
    shadowColor: ColorCode.BLACK,
    shadowOpacity: NumberValues.CONSTANT_VALUE_1,
  },
  profileImage: {
    width: NumberValues.CONSTANT_VALUE_40,
    height: NumberValues.CONSTANT_VALUE_40,
    borderRadius: NumberValues.CONSTANT_VALUE_20,
    marginRight: NumberValues.CONSTANT_VALUE_10,
  },
  imageView: {
    marginTop: NumberValues.CONSTANT_VALUE_10,
  },
});

export default ContactScreenStyle;
