import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axiosInstanceAuth from '../../axios/AxiosRequest';

interface Item {
  isLoading: boolean;
  isError: boolean;
  data: any;
  name: string;
  isSuccess: boolean;
}

export const fetchSignUp = createAsyncThunk('fetchSignUp', async data => {
  console.log(data, 'payload111');
  const response = await axiosInstanceAuth.post(
    'https://crudapi.co.uk/api/v1/user',
    data,
  );
  return response?.data;
});

const SignUpSlice = createSlice({
  name: 'SignUp',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
  } as Item,
  reducers: {
    signUp: (state: any, action: PayloadAction) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSignUp.pending, state => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(fetchSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(fetchSignUp.rejected, state => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
    });
  },
});

export default SignUpSlice.reducer;
