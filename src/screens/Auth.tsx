import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { Button } from '../ui/Button'

export const Auth = () => {
	const [disabledButton, setDisabledButton] = useState(true)
	const [loading, setLoading] = useState(false)
	const [buttonText, setButtonText] = useState('Войти')

	return (
		<View>
			<Button disabled={disabledButton} loading={loading} buttonText={buttonText} />
		</View>
	)
}