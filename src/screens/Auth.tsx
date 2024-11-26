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