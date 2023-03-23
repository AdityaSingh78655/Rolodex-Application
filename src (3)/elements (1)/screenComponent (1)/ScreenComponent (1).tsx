import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {StringConstant} from '../../constants/StringConstant';
import ButtonComponent from '../../elements/buttonComponent/ButtonComponent';
import InputComponent from '../../elements/inputComponent/InputComponent';
import EditUserStyle from '../../theme/style/EditUserStyle';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePath from '../../theme/imagePath/Images';
import {useNavigation} from '@react-navigation/native';
import CustomDropdown from '../../elements/dropDown/CustomDropdown';
import {useAppDispatch} from '../../reduxToolkit/hooks';
import {fetchCountries} from '../../reduxToolkit/slice/CountrySlice';
import {useSelector} from 'react-redux';
import {fetchState} from '../../reduxToolkit/slice/StateSlice';
import {fetchCity} from '../../reduxToolkit/slice/CitySlice';
import DateComponent from '../../elements/dateComponent/DateComponent';
import RadioButton from '../../elements/radioButtonComponent/RadioButton';
import ImagePickerComponent from '../../elements/ImagePicker/ImagePickerComponent';
import {RootState} from '../../reduxToolkit/store';
import InputCompStyle from '../../theme/style/InputCompStyle';

type ScreenComponentProps = {
  screen: boolean;
  onSubmit: any;
  validationSchema: any;
  initialValues: any;
  add: any;
};

const ScreenComponent = ({
  screen,
  onSubmit,
  validationSchema,
  initialValues,
  add,
}: ScreenComponentProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [isOpen, setisOpen] = useState(true);
  const [selectCountry, setSelectCountry] = useState('Select Country');
  const [selectState, setSelectedState] = useState('Select State');
  const [selectCity, setSelectedCity] = useState('Select City');
  // const Add = route?.params;
  console.log(isOpen, 'isOpen');
  //Country Selector
  const CountryData = useSelector(
    (state: RootState) => state.country?.countryData,
  );

  //State Selector
  const stateData = useSelector((state: RootState) => state.stateList?.data);

  //City Selector
  const cityData = useSelector((state: RootState) => state.city?.data);

  //Edit User PreFilled Data
  const userData = useSelector((state: RootState) => state.userData?.userData);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchState(selectCountry?.iso2));
  }, [selectCountry]);

  useEffect(() => {
    const payload = {
      country: selectCountry?.iso2,
      state: selectState?.iso2,
    };
    dispatch(fetchCity(payload));
  }, [selectState]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => onSubmit(values)}
        validationSchema={validationSchema}>
        {({
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          values,
          setFieldValue,
          dirty,
          touched,
        }) => {
          console.log(isValid, 'vag');
          return (
            <ImageBackground style={EditUserStyle.backGroundImage}>
              <ScrollView scrollEnabled={isOpen}>
                {add === true ? (
                  <Text style={InputCompStyle.addUser}>Add User</Text>
                ) : !screen ? (
                  <View style={EditUserStyle.registrationView}>
                    <Text style={EditUserStyle.registrationText}>
                      {StringConstant.PHONE_BOOK_REGISTRATION}
                    </Text>
                  </View>
                ) : (
                  <View style={EditUserStyle.editView}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Profile')}>
                      <Image
                        source={ImagePath.BACK}
                        style={EditUserStyle.editIcon}
                      />
                    </TouchableOpacity>
                    <Text style={EditUserStyle.editText}>Edit Screen</Text>
                  </View>
                )}
                {screen && (
                  <View style={EditUserStyle.imagePicker}>
                    <ImagePickerComponent
                      onSelect={item => {
                        setFieldValue('profileImage', item);
                      }}
                      initialImage={values?.profileImage}
                    />
                  </View>
                )}
                <View style={EditUserStyle.inputComponentView}>
                  <View>
                    <InputComponent
                      onChangeText={handleChange('first_name')}
                      onBlur={handleBlur('first_name')}
                      value={values?.first_name}
                      name={StringConstant.FIRST_NAME}
                      placeHolder={StringConstant.ENTER_YOUR_FIRST_NAME}
                      error={errors.first_name}
                      touched={touched?.first_name}
                    />
                    <InputComponent
                      onChangeText={handleChange('last_name')}
                      onBlur={handleBlur('last_name')}
                      value={values?.last_name}
                      name={StringConstant.LAST_NAME}
                      placeHolder={StringConstant.ENTER_YOUR_LAST_NAME}
                      error={errors.last_name}
                      touched={touched?.last_name}
                    />
                    <InputComponent
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values?.email}
                      name={StringConstant.EMAIL}
                      placeHolder={StringConstant.ENTER_YOUR_EMAIL}
                      error={errors.email}
                      touched={touched?.email}
                    />
                    <InputComponent
                      onChangeText={handleChange('phone_number')}
                      onBlur={handleBlur('phone_number')}
                      value={values?.phone_number}
                      name={StringConstant.PHONE_NUMBER}
                      placeHolder={StringConstant.ENTER_YOUR_PHONE_NUMBER}
                      error={errors.phone_number}
                      touched={touched?.phone_number}
                      keyboardType="numeric"
                    />
                  </View>
                  {screen && (
                    <View>
                      <DateComponent
                        initialDate={values?.DOB ? values?.DOB : ''}
                        onSelect={values => {
                          return setFieldValue(
                            'DOB',
                            values.toLocaleDateString(),
                          );
                        }}
                      />
                      <RadioButton
                        initial={values?.Gender ? values?.Gender - 1 : -1}
                        onPress={values => setFieldValue('Gender', values)}
                      />
                      <Text style={EditUserStyle.countryText}>Country</Text>
                      <CustomDropdown
                        data={CountryData}
                        open={(open) => setisOpen(open)}
                        selectedItem={values => {
                          console.log(values, 'valuescon');
                          setSelectCountry(values);
                          setFieldValue('country', values);
                        }}
                        label={
                          values?.country?.name
                            ? values?.country?.name
                            : 'Select country'
                        }
                      />
                      <Text style={EditUserStyle.stateText}>State</Text>
                      <CustomDropdown
                        data={stateData}
                        open={(open) => setisOpen(open)}
                        selectedItem={values => {
                          console.log(values, 'valuesste');
                          setSelectedState(values);
                          setFieldValue('state', values);
                        }}
                        label={
                          values?.state?.name
                            ? values?.state?.name
                            : 'Select state'
                        }
                      />
                      <Text style={EditUserStyle.cityText}>City</Text>
                      <CustomDropdown
                        data={cityData}
                        open={(open) => setisOpen(open)}
                        selectedItem={values => {
                          console.log(values, 'valuescity');
                          setSelectedCity(values);
                          setFieldValue('city', values);
                        }}
                        label={
                          values?.city?.name
                            ? values?.city?.name
                            : 'Select city'
                        }
                      />
                    </View>
                  )}
                  <ButtonComponent
                    handleSubmit={handleSubmit}
                    disabled={!(isValid && dirty)}
                    name={
                      add === true
                        ? 'Add User'
                        : !screen
                        ? StringConstant.SIGN_UP
                        : StringConstant.EDIT_PROFILE
                    }
                    add={add}
                  />
                </View>
              </ScrollView>
            </ImageBackground>
          );
        }}
      </Formik>
    </>
  );
};

export default ScreenComponent;
