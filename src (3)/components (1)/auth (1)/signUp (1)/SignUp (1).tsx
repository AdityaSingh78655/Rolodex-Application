import {useAppDispatch} from '../../../reduxToolkit/hooks';
import {fetchSignUp} from '../../../reduxToolkit/slice/SignUpSlice';
import {View, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ScreenComponent from '../../../elements/screenComponent/ScreenComponent';
import {signUpInitialValue, signUpValidationSchema} from './SignUpUtils';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import SignUpScreenStyle from '../../../theme/style/SignUpScreenStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../../reduxToolkit/store';
import {fetchLogin} from '../../../reduxToolkit/slice/LoginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ErrorConstant} from '../../../constants/StringConstant';
import {user} from '../../../reduxToolkit/slice/UserDataSlice';

interface SignUpProps {
  route: any;
}

const SignUp = ({route}: SignUpProps) => {
  const {Add} = route?.params ?? {};
  console.log(Add, 'AddAddAdd');
  const loadingRef = useRef(false);
  const dispatch = useAppDispatch();
  const SignUpData = useSelector((state: RootState) => state?.login?.data);
  const [data, setData] = useState([]);
  const SignUpApi = useSelector((state: RootState) => state?.signUp);
  const [ValueData, setValueData] = useState('');
  useEffect(() => {
    dispatch(fetchLogin());
  }, [dispatch]);

  useEffect(() => {
    setData(SignUpData?.items);
  }, [SignUpData]);
  useEffect(() => {
    if (
      loadingRef.current &&
      SignUpApi?.isLoading === false &&
      SignUpApi?.isSuccess === true
    ) {
      const payloadData = {
        first_name: ValueData?.first_name,
        last_name: ValueData?.last_name,
        email: ValueData?.email,
        phone_number: ValueData?.phone_number,
      };
      if (Add) {
        navigation.navigate('Contact');
      } else {
        dispatch(user(payloadData));
        AsyncStorage.setItem('items', JSON.stringify(payloadData));
        Alert.alert('SignUp Successfully Please Enter User Id to login');
        navigation.navigate('Login');
      }
    }
    loadingRef.current = SignUpApi?.isLoading;
  }, [
    SignUpApi?.isLoading,
    SignUpApi?.isSuccess,
    dispatch,
    SignUpApi?.data?.items,
    loadingRef,
  ]);
  const navigation = useNavigation();

  const OnSignUp = async (values: any) => {
    console.log(data, 'datatat');

    const checkEmail = data.filter(item => item?.email === values.email);

    const checkMobileNumber = data.filter(
      item => item?.phone_number === values.phone_number,
    );

    if (_.isEmpty(checkEmail) && _.isEmpty(checkMobileNumber)) {
      setValueData(values);
      const payload = [
        {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone_number: values.phone_number,
        },
      ];
      dispatch(fetchSignUp(payload));
    } else {
      Alert.alert(ErrorConstant.VALID_EMAIL_PASSWORD);
    }
  };

  return (
    <View style={SignUpScreenStyle.signUpView}>
      <ScreenComponent
        onSubmit={(values: any) => OnSignUp(values)}
        initialValues={signUpInitialValue}
        validationSchema={signUpValidationSchema}
        screen={false}
        add={Add}
      />
    </View>
  );
};

export default SignUp;
