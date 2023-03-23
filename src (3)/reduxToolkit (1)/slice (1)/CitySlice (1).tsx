import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axiosInstance from '../../axios/CountryAxios';

interface Item {
  isLoading: boolean;
  isError: boolean;
  data: any;
  name: string;
}

interface Values {
  country: string;
  state: string;
}

export const fetchCity = createAsyncThunk(
  'FetchCity',
  async (payload: Values) => {
    const response = await axiosInstance.get(
      `https://api.countrystatecity.in/v1/countries/${payload.country}/states/${payload.state}/cities`,
    );

    return response?.data;
  },
);

const CitySlice = createSlice({
  name: 'cities',
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
    builder.addCase(fetchCity.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action?.payload;
    });
    builder.addCase(fetchCity.rejected, state => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default CitySlice.reducer;
