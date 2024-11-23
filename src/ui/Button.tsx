import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Button = (props: any) => {
	return (
		<View style={styles.buttonWrapper}>
			<TouchableOpacity style={[props.buttonState === 'disabled' ? styles.buttonContainerDisabled : styles.buttonContainer]} disabled={props.buttonState === 'disabled' ? true : false} >
				<Text style={styles.buttonText}>
					{props.isLoading ? <ActivityIndicator color="white" /> : 'Войти'} 
				</Text>
			</TouchableOpacity>
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