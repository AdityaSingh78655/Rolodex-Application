import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axiosInstanceAuth from '../../axios/AxiosRequest';

interface Item {
  isLoading: boolean;
  isError: boolean;
  data: any;
  name: string;
  isSuccess: boolean;
}

export const fetchUpdateUser = createAsyncThunk(
  'fetchUpdateUser',
  async data => {
    console.log(data, 'payloffad111');
    const response = await axiosInstanceAuth.put(
      `https://crudapi.co.uk/api/v1/user/${data?._uuid}`,
      data,
    );
    return response?.data;
  },
);

const UpdateUserSlice = createSlice({
  name: 'UpdateUser',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
  } as Item,
  reducers: {
    country: (state: any, action: PayloadAction) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUpdateUser.pending, state => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(fetchUpdateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(fetchUpdateUser.rejected, state => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
    });
  },
});

export default UpdateUserSlice.reducer;
