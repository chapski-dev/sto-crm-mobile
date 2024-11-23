import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type PropsType = {
	disabled: boolean,
	loading: boolean,
	buttonText: string
}

export const Button = (props: PropsType) => {
	return (
		<View style={styles.wrapper}>
			<TouchableOpacity style={[props.disabled ? styles.containerDisabled : styles.container]} disabled={props.disabled ? true : false} >
			{
				props.loading ?
				<Text style={styles.text}>{props.buttonText}</Text>
				:
				<ActivityIndicator color="white" />
			}
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		alignItems: 'center'
	},
	containerDisabled: {
		width: 343,
		height: 48,
		backgroundColor: '#0090FF',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
		opacity: 0.5
	},
	container: {
		width: 343,
		height: 48,
		backgroundColor: '#0090FF',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
	},
	text: {
		color: 'white',
		fontSize: 20
	},
})