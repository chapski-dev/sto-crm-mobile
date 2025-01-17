import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const ChangePhoneScreen  = () => {
	const navigation = useNavigation<AuthScreenNavigationProp>();

	const [phone, setPhone] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = () => {
		if (phone) {
			navigation.push('Tabs');
			Toast.show({
				type: 'success',
				text1: 'Успешно!',
				text2: 'Message text'
			})
		} else {
			Toast.show({
				type: 'error',
				text1: 'Ошибка!',
				text2: 'Message text'
			})
		}
	}

	return (
			<KeyboardAwareScrollView style={styles.wrapper} contentContainerStyle={{ justifyContent: 'space-between', flex: 1 }} >

				<View>
					<Text children={'Изменить телефон'} color={'black'} type='title' />
					<Input label={'Телефон'} prompting={'Введите номер без знака плюс (+)'} placeholder='375 00 000 00 00' value={phone} onChangeText={setPhone} errorText={'Неправильно введен номер телефона'} />
				</View>

				<Button title='Сохранить' disabled={phone.length !== 12 || loading} loading={loading} onPress={handleSubmit} />

			</KeyboardAwareScrollView>
		)
}

const styles = StyleSheet.create({
	wrapper: {
		paddingTop: 90,
		paddingBottom: 20,
		paddingHorizontal: 15,
		flexGrow: 1,
	},
})
