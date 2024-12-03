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
  const [inputError, setInputError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleInputChange = (text: string) => {
    setInputValue(text);
    setInputError(text.length > 0 && text.length < 12);
  };

  const handlePhoneChange = (text: string) => {
    setPhoneValue(text);
    setPhoneError(text.length > 0 && text.length < 12);
  };

  return (
    <View style={styles.main}>
        <Title props='Авторизация'/>
      <View>
        <Input 
        label='УНП организации' 
        placeholder='000 000 000 000' 
        value={inputValue} 
        onChangeText={handleInputChange}
        error={inputError}
        errorText="Error" 
        />
      </View>
      <View>
        <Input 
        label="Телефон" 
        prompting="Введите номер без знака плюс (+)" 
        placeholder='375 00 00 00 00'
        value={phoneValue} 
        onChangeText={handlePhoneChange}
        error={phoneError}
        errorText="Error"  
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
