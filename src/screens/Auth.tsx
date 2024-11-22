import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'

export const Auth = () => {
	const [stateV, setStateV] = useState('')

	return (
		<View style={styles.main}>
			<Text>hui</Text>
			<TouchableOpacity  onPress={() => console.log(stateV)}>
				<Text>click</Text>
			</TouchableOpacity>

			<ActivityIndicator  />

			<TextInput onChangeText={setStateV} />
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: 'pink',
		height: 55
	}
})