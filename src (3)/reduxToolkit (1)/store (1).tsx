import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import CountrySlice from './slice/CountrySlice';
import StateSlice from './slice/StateSlice';
import CitySlice from './slice/CitySlice';
import SignUpSlice from './slice/SignUpSlice';
import LoginSlice from './slice/LoginSlice';
import UserDataSlice from './slice/UserDataSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UpdateUserSlice from './slice/UpdateUserSlice';
import DeleteUserSlice from './slice/DeleteUserSlice';
import favouriteSlice from './slice/favouriteSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    country: CountrySlice,
    stateList: StateSlice,
    city: CitySlice,
    signUp: SignUpSlice,
    login: LoginSlice,
    userData: UserDataSlice,
    updateUser: UpdateUserSlice,
    deleteUser: DeleteUserSlice,
    favourite: favouriteSlice,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
