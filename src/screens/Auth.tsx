import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Input from '../ui/Input';
import { Label, MainTitle } from '../ui/Text';

export const Auth = () => {

  return (
    <View style={styles.main}>
        <MainTitle props='Авторизация'/>
      <View>
        <Input props1='УНП организации' placeholder='000 000 000 000'/>
      </View>
      <View>
        <Input props1="Телефон" props2="Введите номер без знака плюс (+)" placeholder='375 00 00 00 00'/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    gap: 24,
  },
});
