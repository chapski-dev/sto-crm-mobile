import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from '../screens/Auth';
import {RootStackParamList} from './types';
import {Tabs} from './Tabs';
import { ChangePhoneScreen } from '../screens/ChangePhoneScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Auth">
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name={'Tabs'} component={Tabs} />
      <Stack.Screen name='ChangePhoneScreen' component={ChangePhoneScreen} />
    </Stack.Navigator>
  );
};
