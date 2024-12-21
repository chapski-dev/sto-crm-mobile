import React, {useState} from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import {Input} from '../ui/Input';
import {Text} from '../ui/Text';
import { Button } from '../ui/Button'
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Auth = () => {
  const [inputValue, setInputValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const [disabledButton, setDisabledButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<AuthScreenNavigationProp>();

  const handleSubmit = () => {
    navigation.push('Tabs');
  };

  return (
    <KeyboardAvoidingView style={styles.main} >

      <View style={styles.inputsWrapper}>

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

      </View>

      <View style={styles.button}>
        <Button
          disabled={disabledButton}
          loading={loading}
          title={'Войти'}
          onPress={handleSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 50,
    marginLeft: 16,
    marginRight: 16,
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "column",

  },
  inputsWrapper: {
    paddingTop: 25,
    gap: 25,
    flexGrow: 1,
  },
  button: {
    paddingBottom: 25
  }
});
