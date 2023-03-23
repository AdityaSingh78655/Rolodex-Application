import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axiosInstanceAuth from '../../axios/AxiosRequest';

interface Item {
  isLoading: boolean;
  isError: boolean;
  data: any;
  name: string;
  uuid: any;
  isSuccess: boolean;
}

export const fetchLogin = createAsyncThunk('fetchLogin', async data => {
  const response = await axiosInstanceAuth.get(
    data
      ? `https://crudapi.co.uk/api/v1/user/${data}`
      : 'https://crudapi.co.uk/api/v1/user',
  );
  return response?.data;
});

const LoginSlice = createSlice({
  name: 'Login',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
  } as Item,
  reducers: {
    login: (state: any, action: PayloadAction) => {
      state.data = action.payload;
    },
    removeLoginData: (state: any) => {
      state.isLoading = false;
      state.data = null;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLogin.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      // console.log(action.payload, 'jdfhsiujgiu');
    });
    builder.addCase(fetchLogin.rejected, state => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});
export const {removeLoginData} = LoginSlice.actions;

export default LoginSlice.reducer;
