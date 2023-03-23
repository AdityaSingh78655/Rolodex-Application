import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../components/auth/SplashScreen/SplashScreen';
import Login from '../components/auth/login/Login';
import SignUp from '../components/auth/signUp/SignUp';
import {StringConstant} from '../constants/StringConstant';
import BottomNavigation from './BottomNavigation';
import EditProfile from '../components/editProfile/EditProfile';
import ViewUser from '../components/viewUser/ViewUser';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StringConstant.SPLASH}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StringConstant.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StringConstant.SIGN_UP}
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StringConstant.TAB_NAVIGATION}
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StringConstant.EDIT_PROFILE}
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StringConstant.VIEW_USER}
        component={ViewUser}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
