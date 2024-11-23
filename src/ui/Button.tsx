import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type PropsType = {
	disabled: boolean,
	loading: boolean,
	buttonText: string
}

export const Button = (props: PropsType) => {
	return (
		<View style={styles.buttonWrapper}>
			<TouchableOpacity style={[props.disabled ? styles.buttonContainerDisabled : styles.buttonContainer]} disabled={props.disabled ? true : false} >
			{
				props.loading ?
				<Text style={styles.buttonText}>{props.buttonText}</Text>
				:
				<ActivityIndicator color="white" />
			}
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