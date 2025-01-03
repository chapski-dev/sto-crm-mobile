import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {OrdersScreen} from '@src/screens/OrdersScreen';
import {ProfileScreen} from '@src/screens/ProfileScreen';
import CarIcon from '@assets/svg/car.svg';
import ProfileIcon from '@assets/svg/profile.svg';
import {TabsParamList} from './types';

const Tab = createBottomTabNavigator<TabsParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({color}) => <CarIcon color={color} />,
          title: 'Список заказов',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon color={color} />,
          title: 'Профиль',
        }}
      />
    </Tab.Navigator>
  );
};
