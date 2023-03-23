import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axiosInstanceAuth from '../../axios/AxiosRequest';

interface Item {
  isLoading: boolean;
  isError: boolean;
  data: any;
  name: string;
  isSuccess: boolean;
}

export const fetchDelete = createAsyncThunk('fetchDelete', async data => {
  console.log(data, 'payload112');
  const response = await axiosInstanceAuth.delete(
    `https://crudapi.co.uk/api/v1/user/${data}`,
  );
  return response?.data;
});

const DeleteUserSlice = createSlice({
  name: 'Delete',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
  } as Item,
  reducers: {
    delete: (state: any, action: PayloadAction) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDelete.pending, state => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(fetchDelete.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(fetchDelete.rejected, state => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
    });
  },
});

export default DeleteUserSlice.reducer;
