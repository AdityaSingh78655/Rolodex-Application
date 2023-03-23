import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {StringConstant} from '../../../constants/StringConstant';
import ImagePath from '../../../theme/imagePath/Images';
import SplashScreenStyle from '../../../theme/style/SplashScreenStyle';
import {NumberValues} from '../../../constants/FixedValues';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('items')
      .then((values: any) => {
        setTimeout(() => {
          if (values === null) {
            navigation.navigate(StringConstant.LOGIN);
          } else {
            navigation.navigate(StringConstant.TAB_NAVIGATION);
          }
        }, NumberValues.CONSTANT_VALUE_3000);
      })
      .catch(err => console.log(err));
  });

  return (
    <>
      <View style={SplashScreenStyle.header}>
        <Image source={ImagePath.SPLASH_ICON} style={SplashScreenStyle.image} />
      </View>
      <View style={SplashScreenStyle.footer}>
        <Text style={SplashScreenStyle.text}>
          {StringConstant.CONTACT_BOOK}
        </Text>
      </View>
    </>
  );
};

export default SplashScreen;
