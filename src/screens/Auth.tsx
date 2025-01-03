import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Input} from '@src/ui';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Auth = () => {
  const [UNPValue, setUNPValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<AuthScreenNavigationProp>();

  const handleSubmit = () => {
    setLoading(true);
    navigation.push('Tabs');
    setLoading(false);
  };

  return (
    <KeyboardAwareScrollView
      style={styles.main}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.inputsWrapper}>
        <Text children="Авторизация" type="title" />
        <View>
          <Input
            label="УНП организации"
            placeholder="000 000 000 000"
            value={UNPValue}
            onChangeText={setUNPValue}
            error={UNPValue.length > 0 && UNPValue.length < 12}
            errorText="Error"
            maxLength={12}
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
            maxLength={12}
          />
        </View>
      </View>

      <Button
        disabled={(!UNPValue && !phoneValue) || loading}
        loading={loading}
        title="Войти"
        onPress={handleSubmit}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 50,
    marginHorizontal: 16,
    marginBottom: 15,
    flexGrow: 1,
    flexDirection: 'column',
  },
  inputsWrapper: {
    paddingTop: 25,
    gap: 25,
    flexGrow: 1,
  },
});
