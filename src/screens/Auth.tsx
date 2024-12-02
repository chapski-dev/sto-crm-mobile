import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Input from '../ui/Input';
import { Title } from '../ui/Text';

export const Auth = () => {
  const [inputValue, setInputValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  return (
    <View style={styles.main}>
        <Title props='Авторизация'/>
      <View>
        <Input 
        label='УНП организации' 
        placeholder='000 000 000 000' 
        value={inputValue} 
        onChangeText={setInputValue} 
        />
      </View>
      <View>
        <Input 
        label="Телефон" 
        prompting="Введите номер без знака плюс (+)" 
        placeholder='375 00 00 00 00'
        value={phoneValue} 
        onChangeText={setPhoneValue} 
        />
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
