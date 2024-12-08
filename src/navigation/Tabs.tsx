import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {OrdersScreen} from '../screens/OrdersScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import OrderIcon from '../../assets/icons/OrderIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import {TabsParamList} from './types';

const Tab = createBottomTabNavigator<TabsParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({color}) => <OrderIcon color={color} />,
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
