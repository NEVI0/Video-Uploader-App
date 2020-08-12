import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function InputControl({ placeholder, iconName, isPassword }) {
	return (
		<View style={ styles.container }>
			<Feather style={ styles.icon } name={ iconName } size={ 20 } color="#B209D0" />
			<TextInput
				style={ styles.input }
				placeholder={ placeholder }
				secureTextEntry={ isPassword }
				autoCorrect={ false }
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		paddingVertical: 8,
		paddingHorizontal: 15,
		borderRadius: 50,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		marginBottom: 15
	},
	input: {
		flex: 1,
		fontSize: 14
	},
	icon: {
		marginRight: 10
	}
});