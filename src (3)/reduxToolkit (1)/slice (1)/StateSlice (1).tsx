import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axiosInstance from '../../axios/CountryAxios';

interface Item {
  isLoading: boolean;
  isError: boolean;
  data: any;
  name: string;
}

export const fetchState = createAsyncThunk('FetchState', async data => {
  const response = await axiosInstance.get(
    `https://api.countrystatecity.in/v1/countries/${data}/states`,
  );

  return response?.data;
});

const StateSlice = createSlice({
  name: 'states',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  } as Item,
  reducers: {
    country: (state: any, action: PayloadAction) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchState.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchState.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action?.payload;
    });
    builder.addCase(fetchState.rejected, state => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default StateSlice.reducer;
