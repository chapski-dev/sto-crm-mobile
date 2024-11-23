import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Button = () => {
	const [buttonState, setButtonState] = useState<String>('disabled')

	//can be 'disabled', 'enabled', 'loading'

	return (
		<View style={styles.buttonWrapper}>
			{buttonState === 'disabled' 
			?
			<TouchableOpacity style={styles.buttonContainerDisabled} disabled={true}>
				<Text style={styles.buttonText}>Войти</Text>
			</TouchableOpacity>
			:
			<TouchableOpacity style={styles.buttonContainer}>
				{
					buttonState === 'enabled' ?
					<Text style={styles.buttonText}>Войти</Text> :
					<ActivityIndicator color="white"  />
				}
			</TouchableOpacity>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	buttonWrapper: {
		width: '100%',
		alignItems: 'center'
	},
	buttonContainerDisabled: {
		width: 343,
		height: 48,
		backgroundColor: '#0090FF',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
		opacity: 0.5
	},
	buttonContainer: {
		width: 343,
		height: 48,
		backgroundColor: '#0090FF',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
	},
	buttonText: {
		color: 'white',
		fontSize: 20
	},
})