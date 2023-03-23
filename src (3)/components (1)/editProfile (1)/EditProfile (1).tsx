import {user} from '../../reduxToolkit/slice/UserDataSlice';
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenComponent from '../../elements/screenComponent/ScreenComponent';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../reduxToolkit/hooks';
import {
  EditProfileInitial,
  editProfileValidationSchema,
} from './EditProfileUtils';
import {fetchUpdateUser} from '../../reduxToolkit/slice/UpdateUserSlice';
import {useSelector} from 'react-redux';
import {fetchLogin} from '../../reduxToolkit/slice/LoginSlice';
import {RootState} from '../../reduxToolkit/store';

const EditProfile = (props: any) => {
  const ContactData = props?.route?.params?.data;
  const ContactDataEdit = props?.route?.params?.isEdit;
  console.log(ContactDataEdit, 'ContactDataEdit');

  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [submit, setSubmit] = useState(false);
  const UserData = useSelector((state: RootState) => state?.userData?.userData);
  const LoginData = useSelector((state: RootState) => state.login);
  console.log(LoginData, 'LoginDataLoginData');
  console.log(UserData, 'UserDataUserData');
  const [Id, setId] = useState('');
  const UpdateUser = useSelector((state: RootState) => state?.updateUser);
  console.log(UpdateUser, 'UpdateUserUpdateUser');

  const editProfileInitialValue: EditProfileInitial = {
    _uuid: ContactDataEdit ? ContactData?._uuid : UserData?._uuid,
    first_name: ContactDataEdit
      ? ContactData?.first_name
      : UserData?.first_name,
    last_name: ContactDataEdit ? ContactData?.last_name : UserData?.last_name,
    email: ContactDataEdit ? ContactData?.email : UserData?.email,
    phone_number: ContactDataEdit
      ? ContactData?.phone_number
      : UserData?.phone_number,
    Gender: ContactDataEdit
      ? ContactData?.Gender
      : UserData?.Gender
      ? UserData?.Gender
      : undefined,
    DOB: ContactDataEdit
      ? ContactData?.DOB
      : UserData?.DOB
      ? UserData?.DOB
      : undefined,
    profileImage: ContactDataEdit
      ? ContactData?.profileImage
      : UserData?.profileImage
      ? UserData?.profileImage
      : undefined,

    country: ContactDataEdit
      ? {
          id: ContactData?.country?.id,
          iso2: ContactData?.country?.iso2,
          name: ContactData?.country?.name,
        }
      : UserData?.country
      ? {
          id: UserData?.country?.id,
          iso2: UserData?.country?.iso2,
          name: UserData?.country?.name,
        }
      : {
          id: undefined,
          iso2: undefined,
          name: undefined,
        },
    state: ContactDataEdit
      ? {
          id: ContactData?.state?.id,
          iso2: ContactData?.state?.iso2,
          name: ContactData?.state?.name,
        }
      : UserData?.state
      ? {
          id: UserData?.state?.id,
          iso2: UserData?.state?.iso2,
          name: UserData?.state?.name,
        }
      : {
          id: undefined,
          iso2: undefined,
          name: undefined,
        },
    city: ContactDataEdit
      ? {
          id: ContactData?.city?.id,
          name: ContactData?.city?.name,
        }
      : UserData?.city
      ? {
          id: UserData?.city?.id,
          name: UserData?.city?.name,
        }
      : {
          id: undefined,
          name: undefined,
        },
  };
  // FOr Edit Logged In User
  useEffect(() => {
    if (
      LoginData?.isLoading === false &&
      LoginData?.isSuccess === true &&
      submit === true &&
      ContactDataEdit === false
    ) {
      dispatch(user(LoginData?.data));
      navigation.navigate('Profile');
    }
  }, [
    LoginData,
    submit,
    LoginData?.isLoading,
    LoginData?.isSuccess,
    navigation,
    dispatch,
  ]);
  // FOr Edit Contact User
  useEffect(() => {
    if (
      UpdateUser?.isLoading === false &&
      UpdateUser?.isSuccess === true &&
      submit === true
    ) {
      if (props?.route?.params?.isEdit === true) {
        navigation.navigate('Contact');
      } else {
        dispatch(fetchLogin(Id));
      }
    }
  }, [
    UpdateUser,
    submit,
    UpdateUser?.isLoading,
    UpdateUser?.isSuccess,
    navigation,
    dispatch,
  ]);
  const OnEdit = async (values: any) => {
    if (props?.route?.params?.isEdit === true) {
      await dispatch(fetchUpdateUser(values));
      setSubmit(true);
    } else {
      await dispatch(fetchUpdateUser(values));
      dispatch(fetchLogin(values?._uuid))
      setId(values._uuid);
      setSubmit(true);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScreenComponent
        onSubmit={values => OnEdit(values)}
        initialValues={editProfileInitialValue}
        validationSchema={editProfileValidationSchema}
        screen={true}
      />
    </View>
  );
};

export default EditProfile;
