import {StyleSheet} from 'react-native';
import {NumberValues} from '../../constants/FixedValues';
import {ColorCode} from '../../constants/ColorCode';

const ImagePickerStyle = StyleSheet.create({
  image: {
    borderRadius: NumberValues.CONSTANT_VALUE_90,
    height: NumberValues.CONSTANT_VALUE_150,
    width: NumberValues.CONSTANT_VALUE_150,
  },
  editImageView: {
    paddingLeft: NumberValues.CONSTANT_VALUE_90,
    bottom: NumberValues.CONSTANT_VALUE_50,
  },
  editImage: {
    backgroundColor: ColorCode.WHITE,
    transform: [{scale: NumberValues.DECIMAL_CONSTANT_VALUE_7}],
    width: NumberValues.CONSTANT_VALUE_70,
    padding: NumberValues.CONSTANT_VALUE_10,
    borderRadius: NumberValues.CONSTANT_VALUE_70,
  },
});

export default ImagePickerStyle;
