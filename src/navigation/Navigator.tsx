import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from '../screens/Auth';
import {RootStackParamList} from './types';
import {Tabs} from './Tabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Auth">
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name={'Tabs'} component={Tabs} />
    </Stack.Navigator>
  );
};
