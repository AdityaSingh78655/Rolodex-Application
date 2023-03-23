import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, View} from 'react-native';
import Contact from '../components/Screens/Contact';
import Favorite from '../components/Screens/Favorite';
import Profile from '../components/Screens/Profile';
import ImagePath from '../theme/imagePath/Images';
import TabIconStyle from '../theme/style/dashboardStyle/TabIconStyle';

const createTabIcon = (icon, label, focused) => {
  const iconStyle = focused ? TabIconStyle.activeIcon : TabIconStyle.icon;
  const labelStyle = focused ? TabIconStyle.activeLabel : TabIconStyle.label;

  return (
    <View style={{alignItems: 'center'}}>
      <Image style={iconStyle} source={icon} />
      <Text style={labelStyle}>{label}</Text>
    </View>
  );
};

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) =>
            createTabIcon(ImagePath.CONTACT, 'Contact', focused),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) =>
            createTabIcon(ImagePath.FAVORITE, 'Favorite', focused),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) =>
            createTabIcon(ImagePath.PROFILE, 'Profile', focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
