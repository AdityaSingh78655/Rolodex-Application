import * as yup from 'yup';
import {NumberValues} from '../../constants/FixedValues';
import {RegexConstant} from '../../constants/RegexConstant';
import {ErrorConstant} from '../../constants/StringConstant';

export interface EditProfileInitial {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  _uuid: string;
  Gender: undefined | string;
  DOB: undefined | string;
  country: {
    id: string | undefined;
    iso2: string | undefined;
    name: string | undefined;
  };
  state: {
    id: string | undefined;
    iso2: string | undefined;
    name: string | undefined;
  };
  city: {
    id: string | undefined;
    name: string | undefined;
  };
  profileImage: string | undefined;
}
export const editProfileValidationSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(
      NumberValues.CONSTANT_VALUE_3,
      ({min}) =>
        `${ErrorConstant.NAME_MUST_BE} ${min} ${ErrorConstant.CHARACTER}`,
    )
    .required(ErrorConstant.FIRST_NAME_IS_REQUIRED)
    .matches(RegexConstant.FIRST_NAME, ErrorConstant.MUST_BE_CHARACTER),
  last_name: yup
    .string()
    .min(
      NumberValues.CONSTANT_VALUE_3,
      ({min}) =>
        `${ErrorConstant.NAME_MUST_BE} ${min} ${ErrorConstant.CHARACTER}`,
    )
    .required(ErrorConstant.LAST_NAME_IS_REQUIRED)
    .matches(RegexConstant.LAST_NAME, ErrorConstant.MUST_BE_CHARACTER),
  email: yup
    .string()
    .email(ErrorConstant.ENTER_VALID_EMAIL)
    .required(ErrorConstant.EMAIL_IS_REQUIRED),
  phone_number: yup
    .string()
    .min(
      NumberValues.CONSTANT_VALUE_10,
      ({min}) =>
        `${ErrorConstant.PHONE_NO_MUST_BE} ${min} ${ErrorConstant.DIGIT}`,
    )
    .required(ErrorConstant.PHONE_NUMBER_IS_REQUIRED)
    .matches(
      RegexConstant.MOBILE_NUMBER,
      ErrorConstant.ENTER_VALID_MOBILE_NUMBER,
    ),
  Gender: yup.string().required(ErrorConstant.GENDER_REQUIRED),
  DOB: yup.string().required(ErrorConstant.DOB_REQUIRED),
  country: yup.object().required(ErrorConstant.COUNTRY_REQUIRED),
  state: yup.object().required(ErrorConstant.STATE_REQUIRED),
  city: yup.object().required(ErrorConstant.CITY_REQUIRED),
  profileImage: yup.string().required(ErrorConstant.PROFILE_IMAGE_REQUIRED),
});
