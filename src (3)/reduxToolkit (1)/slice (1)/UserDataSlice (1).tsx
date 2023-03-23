import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  UserData: null,
};

const UserDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    user: (state: any, action: any) => {
      console.log(action.payload, 'action.payload');

      state.userData = action.payload;
    },
    removeUser: (state: any) => {
      state.userData = initialState;
    },
  },
});

export const {user, removeUser} = UserDataSlice.actions;
export default UserDataSlice.reducer;
