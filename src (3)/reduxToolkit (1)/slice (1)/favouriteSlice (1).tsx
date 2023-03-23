import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: [],
};

const favouriteSlice = createSlice({
  name: 'favouriteSlice',
  initialState,
  reducers: {
    favouriteUser: (state: any, action: any) => {
      state.userData = [...state.userData, action.payload];
    },
    removeFavouriteUser: (state: any, action: any) => {
      const DeleteUser = state?.userData?.filter(
        (item: any) => item?._uuid !== action?.payload?._uuid,
      );
      state.userData = DeleteUser;
    },
  },
});

export const {favouriteUser, removeFavouriteUser} = favouriteSlice.actions;
export default favouriteSlice.reducer;
