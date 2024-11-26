import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type PropsType = {
	disabled: boolean,
	loading: boolean,
	title: string,
	onPress: Function,
	wrapperStyle?: {width: '100%'},
	bodyStyle?: {width: 343, height: 48, backgroundColor: '#0090FF'},
	bodyDisabledStyle?: {width: 343, height: 48, backgroundColor: '#0090FF', opacity: 0.5},
	textStyle?: {color: 'white', fontSize: 20}
}

export const Button = (props: PropsType) => {
	return (
		<View style={{...styles.wrapper, ...props.wrapperStyle}}>
			<TouchableOpacity style={props.disabled ? {...styles.bodyDisabled, ...props.bodyDisabledStyle} : {...styles.body, ...props.bodyStyle}} disabled={props.disabled} onPress={() => props.onPress} >
			{
				props.loading ?
				<ActivityIndicator color="white" />
				:
				<Text style={{...styles.text, ...props.textStyle}}>{props.title}</Text>
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