import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import LoginScreenStyle from '../../../theme/style/LoginScreenStyle';
import ImagePath from '../../../theme/imagePath/Images';
import {ErrorConstant, StringConstant} from '../../../constants/StringConstant';
import {Formik} from 'formik';
import {loginValidationSchema, loginInitialValue} from './LoginUtils';
import ButtonComponent from '../../../elements/buttonComponent/ButtonComponent';
import InputComponent from '../../../elements/inputComponent/InputComponent';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../../reduxToolkit/hooks';
import {fetchLogin} from '../../../reduxToolkit/slice/LoginSlice';
import {RootState} from '../../../reduxToolkit/store';
import {user} from '../../../reduxToolkit/slice/UserDataSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ColorCode} from '../../../constants/ColorCode';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [data, setData] = useState('');
  const LoginData = useSelector((state: RootState) => state.login);
  console.log(LoginData, 'LoginData');

  const loaderShown = LoginData?.isLoading;

  const onSubmitLogin = async (values: any) => {
    await dispatch(fetchLogin(values.user_id));
    if (LoginData?.isLoading === false && LoginData?.data !== null) {
      setData(LoginData?.data);
      await dispatch(user(LoginData?.data));

      await AsyncStorage.setItem('items', JSON.stringify(LoginData?.data));
      navigation.navigate(
        StringConstant.TAB_NAVIGATION,
        StringConstant.CONTACT,
        {data: LoginData?.data},
      );
    } else {
      Alert.alert(ErrorConstant.PLEASE_ENTER_VALID_USER_ID);
    }
  };

  return (
    <View style={LoginScreenStyle.headerView}>
      <Formik
        initialValues={loginInitialValue}
        onSubmit={values => onSubmitLogin(values)}
        validationSchema={loginValidationSchema}>
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
        }) => {
          return (
            <ImageBackground style={LoginScreenStyle.backGroundImage}>
              <SafeAreaView>
                <Image
                  source={ImagePath.SPLASH_ICON}
                  style={LoginScreenStyle.image}
                />
                <Text style={LoginScreenStyle.headerText}>
                  {StringConstant.PHONE_BOOK_HEADING}
                </Text>
                <View>
                  <View style={LoginScreenStyle.inputComponentView}>
                    <InputComponent
                      onChangeText={handleChange('user_id')}
                      onBlur={handleBlur('user_id')}
                      value={values.user_id}
                      name={StringConstant.USER_ID}
                      placeHolder={StringConstant.ENTER_YOUR_USER_ID}
                      error={errors.user_id}
                      touched={true}
                    />
                  </View>
                  <ButtonComponent
                    handleSubmit={handleSubmit}
                    disabled={!(isValid && dirty)}
                    name={StringConstant.LOGIN}
                  />
                  <View style={LoginScreenStyle.newUserView}>
                    <Text style={LoginScreenStyle.newUser}>
                      {StringConstant.NEW_USER}
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SignUp')}>
                      <Text style={LoginScreenStyle.register}>
                        {StringConstant.REGISTER}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </SafeAreaView>
            </ImageBackground>
          );
        }}
      </Formik>
      {loaderShown && (
        <ActivityIndicator
          style={LoginScreenStyle.activityIndicator}
          size="large"
          color={ColorCode.BLUE}
        />
      )}
    </View>
  );
};

export default Login;
