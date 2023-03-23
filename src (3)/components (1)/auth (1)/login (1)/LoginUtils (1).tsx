import * as yup from 'yup';
import {ErrorConstant} from '../../../constants/StringConstant';

interface LoginInitial {
  user_id: string;
}

export const loginInitialValue: LoginInitial = {
  user_id: '',
};

export const loginValidationSchema = yup.object().shape({
  user_id: yup.string().required(ErrorConstant.USER_ID_IS_REQUIRED),
});
