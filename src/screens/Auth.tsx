import React, {useState} from 'react';
import { ActivityIndicator, StyleSheet, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import {Input} from '../ui/Input';
import {Text} from '../ui/Text';
import { Button } from '../ui/Button'

export const Auth = () => {
  const [inputValue, setInputValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const [disabledButton, setDisabledButton] = useState(true)
	const [loading, setLoading] = useState(true)

	const onAuthButtonPressHandler = () => {
		console.log('button pressed')
	}

  return (
    <View style={styles.main}>

      <Text children="Авторизация" type='body' fontWeight={700} fontSize={32} color='#203040' />

      <View>
        <Input
          label="УНП организации"
          placeholder="000 000 000 000"
          value={inputValue}
          onChangeText={setInputValue}
          error={inputValue.length > 0 && inputValue.length < 12}
          errorText="Error"
        />
      </View>

      <View>
        <Input
          label="Телефон"
          prompting="Введите номер без знака плюс (+)"
          placeholder="375 00 00 00 00"
          value={phoneValue}
          onChangeText={setPhoneValue}
          error={phoneValue.length > 0 && phoneValue.length < 12}
          errorText="Error"
        />
      </View>

      <View>
        <Button 
          disabled={disabledButton} 
          loading={loading} 
          title={'Войти'} 
          onPress={onAuthButtonPressHandler}
        />
		</View>

    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 50,
    marginLeft: 16,
    marginRight: 16,
    gap: 24,
  },
});