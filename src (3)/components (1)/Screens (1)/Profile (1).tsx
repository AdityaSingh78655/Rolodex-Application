import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import ImagePath from '../../theme/imagePath/Images';
import ProfileScreenStyle from '../../theme/style/dashboardStyle/ProfileScreenStyle';
import {StringConstant} from '../../constants/StringConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {useAppDispatch} from '../../reduxToolkit/hooks';
import {removeLoginData} from '../../reduxToolkit/slice/LoginSlice';
import {removeUser} from '../../reduxToolkit/slice/UserDataSlice';

type RootState = {
  userData: {
    userData: {
      first_name: string;
      last_name: string;
      phone_number: string;
    };
  };
};

const Profile = () => {
  const navigation = useNavigation();
  const userData = useSelector((state: RootState) => state.userData?.userData);
  console.log(userData, ';jhijihgugu');
  const disptach = useAppDispatch();
  const removeData = async () => {
    console.log('data removed');

    try {
      await AsyncStorage.removeItem('items');
      disptach(removeLoginData());
      disptach(removeUser());

      navigation.navigate(StringConstant.LOGIN);
    } catch (error) {
      Alert.alert('Try Again');
    }
  };

  return (
    <View style={ProfileScreenStyle.header}>
      <Image
        style={ProfileScreenStyle.image}
        source={
          userData?.profileImage === undefined
            ? ImagePath.USER
            : {uri: userData?.profileImage}
        }
      />
      <View>
        <Text style={ProfileScreenStyle.name}>
          Hi, {userData?.first_name + ' ' + userData?.last_name}
        </Text>
        <Text style={ProfileScreenStyle.mobileNo}>
          {userData?.phone_number}
        </Text>
      </View>
      <View style={ProfileScreenStyle.buttonView}>
        <View style={ProfileScreenStyle.editView}>
          <TouchableOpacity
            style={ProfileScreenStyle.editTouchable}
            onPress={() =>
              navigation.navigate(StringConstant.EDIT_PROFILE, {isEdit: false})
            }>
            <Text style={ProfileScreenStyle.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={ProfileScreenStyle.signOutView}>
          <TouchableOpacity
            style={ProfileScreenStyle.signOutTouchable}
            onPress={() => removeData()}>
            <Text style={ProfileScreenStyle.signOutText}>
              {StringConstant.SIGN_OUT}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
