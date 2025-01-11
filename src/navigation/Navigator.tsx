import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from '../screens/Auth';
import {RootStackParamList} from './types';
import {Tabs} from './Tabs';
import OrderDetailScreen from '../screens/OrderDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth">
      <Stack.Screen name="Auth" options={{headerShown: false}} component={Auth} />
      <Stack.Screen name={'Tabs'} options={{headerShown: false}} component={Tabs} />
      <Stack.Screen name={'OrderDetail'} options={{
        headerBackTitle: '',
        title: '',
      }} component={OrderDetailScreen} />
    </Stack.Navigator>
  );
};
