import * as yup from 'yup';
import {NumberValues} from '../../../constants/FixedValues';
import {RegexConstant} from '../../../constants/RegexConstant';
import {ErrorConstant} from '../../../constants/StringConstant';

interface SignUpInitial {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export const signUpInitialValue: SignUpInitial = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
};

export const signUpValidationSchema = yup.object().shape({
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
});
