import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'

export const Auth = () => {
	const [buttonValue, setButtonValue] = useState('')

	return (
		<View style={styles.main}>
			<Text>hui</Text>
			<TouchableOpacity  onPress={() => console.log(buttonValue)}>
				<Text>click</Text>
			</TouchableOpacity>

			<ActivityIndicator  />

			<TextInput onChangeText={setButtonValue} />
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: 'pink',
		height: 55
	}
})