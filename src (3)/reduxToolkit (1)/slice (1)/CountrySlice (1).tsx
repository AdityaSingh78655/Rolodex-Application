import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axiosInstance from '../../axios/CountryAxios';

interface Item {
  isLoading: boolean;
  isError: boolean;
  countryData: any;
  name: string;
}

export const fetchCountries = createAsyncThunk('FetchCountry', async () => {
  const response = await axiosInstance.get(
    'https://api.countrystatecity.in/v1/countries',
  );

  return response?.data;
});

const CountrySlice = createSlice({
  name: 'countries',
  initialState: {
    isLoading: false,
    countryData: null,
    isError: false,
  } as Item,
  reducers: {
    country: (state: any, action: PayloadAction) => {
      state.countryData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCountries.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countryData = action?.payload;
    });
    builder.addCase(fetchCountries.rejected, state => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default CountrySlice.reducer;
