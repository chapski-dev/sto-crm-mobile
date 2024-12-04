import React from 'react'
import { ActivityIndicator, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native'

interface PropsType extends ViewProps {
	disabled: boolean,
	loading: boolean,
	title: string,
	onPress: Function,
	style?: StyleProp<ViewStyle>
}

export const Button = (props: PropsType) => {
	return (
		<View style={[styles.wrapper, props.style]}>
			<TouchableOpacity style={props.disabled ? [styles.bodyDisabled, props.style] : [styles.body, props.style]} disabled={props.disabled} onPress={() => props.onPress} >
			{
				props.loading ?
				<ActivityIndicator color="white" />
				:
				<Text style={[styles.text, props.style]}>{props.title}</Text>
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
	body: {
		width: 343,
		height: 48,
		backgroundColor: '#0090FF',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
	},
	bodyDisabled: {
		width: 343,
		height: 48,
		backgroundColor: '#0090FF',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
		opacity: 0.5
	},
	text: {
		color: 'white',
		fontSize: 20
	},
})