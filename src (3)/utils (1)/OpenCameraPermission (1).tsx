import ImagePicker from 'react-native-image-crop-picker';
import {NumberValues} from '../constants/FixedValues';

const openCamera = (index, cb) => {
  console.log(index, cb, 'Aditya ');
  const myAction =
    index === NumberValues.CONSTANT_VALUE_1
      ? ImagePicker.openPicker
      : ImagePicker.openCamera;
  const options = {
    width: NumberValues.CONSTANT_VALUE_1000,
    height: NumberValues.CONSTANT_VALUE_950,
    cropping: true,
    compressImageQuality: NumberValues.DECIMAL_CONSTANT_VALUE_5,
  };
  myAction(options).then(image => {
    cb(image);
  });
};
export default openCamera;
