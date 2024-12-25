import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import Toast from 'react-native-toast-message';

export const ChangePhoneScreen  = () => {
	type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
	const navigation = useNavigation<AuthScreenNavigationProp>();

	const handleSubmit = () => {
		if (inputValue) {
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

	const [inputValue, setInputValue] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	return (
			<View style={styles.wrapper}>

				<View style={styles.body}>
					<Text children={'Изменить телефон'} type='body' fontWeight={700} fontSize={36} color='black' />
					<View style={styles.info}>
						<Text children={'Телефон'} fontSize={15} fontWeight={400} color='#798391' />
						<Input placeholder='375 00 000 00 00' value={inputValue} onChangeText={setInputValue} error={false} errorText={'Неправильно введен номер телефона'} />
						<Text children={'Введите номер без знака плюс (+)'} fontSize={15} fontWeight={400} color='#798391' />
					</View>
				</View>

				<Button title='Сохранить' disabled={inputValue.length === 12 ? false : true} loading={isLoading} onPress={handleSubmit} buttonStyle={{backgroundColor: '#0090FF'}} textStyle={{color: 'white', fontWeight: 600, fontSize: 17}} />

			</View>
		)
}

const styles = StyleSheet.create({
	wrapper: {
		paddingTop: 90,
		paddingBottom: 20,
		paddingHorizontal: 15,
		flexGrow: 1,
		justifyContent: 'space-between',
	},
	body: {

	},
	info: {

	},
})