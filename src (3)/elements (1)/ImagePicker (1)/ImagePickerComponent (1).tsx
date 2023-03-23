import {View, Alert, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import openCamera from '../../utils/OpenCameraPermission';
import {askCameraPermission} from '../../utils/AskCameraPermission';
import ImagePath from '../../theme/imagePath/Images';
import ImagePickerStyle from '../../theme/style/ImagePickerStyle';
import {NumberValues} from '../../constants/FixedValues';
import {StringConstant} from '../../constants/StringConstant';

const ImagePickerComponent = ({onSelect, initialImage}) => {
  console.log(initialImage, 'initialImage');

  const [picture, setPictures] = useState(initialImage);

  const cb = (image: any) => {
    setPictures(image.path);
    onSelect(image.path);
  };

  //Image Upload func
  const UploadImage = async () => {
    console.log('openCamera');
    await askCameraPermission();
    openCameraOption();
  };

  // Open Media method
  const openCameraOption = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: StringConstant.CAMERA,
        onPress: () => openCamera(NumberValues.CONSTANT_VALUE_0, cb),
        style: StringConstant.CANCEL,
      },
      {
        text: StringConstant.GALLERY,

        onPress: () => openCamera(NumberValues.CONSTANT_VALUE_1, cb),
      },
    ]);
  };

  return (
    <View>
      <Image
        style={ImagePickerStyle.image}
        source={picture === undefined ? ImagePath.USER : {uri: picture}}
      />
      <View style={ImagePickerStyle.editImageView}>
        <TouchableOpacity
          onPress={() => UploadImage()}
          style={ImagePickerStyle.editImage}>
          <Image source={ImagePath.EDIT} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePickerComponent;
