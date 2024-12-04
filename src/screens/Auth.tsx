feat/ui-button
import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { Button } from '../ui/Button'

export const Auth = () => {
	const [disabledButton, setDisabledButton] = useState(false)
	const [loading, setLoading] = useState(false)

	const onAuthButtonPressHandler = () => {
		console.log('button pressed')
	}

	return (
		<View>
			<Button 
				disabled={disabledButton} 
				loading={loading} 
				title={'Войти'} 
				onPress={onAuthButtonPressHandler}
			/>
		</View>
	)
}

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from '../ui/Input';
import {Title} from '../ui/Text';

export const Auth = () => {
  const [inputValue, setInputValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  return (
    <View style={styles.main}>
      <Title props="Авторизация" />
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
main
