import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import InputControl from '../components/InputControl';

export default function Signin({ navigation }) {
	return (
		<View style={ styles.container }>			

			<Text style={ styles.title }>Entrar</Text>

			<View style={ styles.content }>
				<InputControl placeholder="E-mail" iconName="mail" isPassword={ false } />
				<InputControl placeholder="Senha" iconName="lock" isPassword={ true } />

				<TouchableOpacity>
					<Text style={ styles.forgotPass }>Esqueci minha senha</Text>
				</TouchableOpacity>

				<TouchableOpacity style={{ marginVertical: 20 }}>
					<LinearGradient
          				colors={["#B209D0", "#9313ad", "#6d0584"]}
          				style={ styles.btn }
          			>
			          	<Text style={ styles.textBtn }>Entrar</Text>
			        </LinearGradient>
				</TouchableOpacity>
			</View>

			<View style={ styles.divider }>
				<View style={ styles.line } />
				<Text style={ styles.dividerText }>OU</Text>
				<View style={ styles.line } />
			</View>

			<View style={ styles.footer }>
				<TouchableOpacity onPress={ () => navigation.navigate('Signup') }>
					<Text style={ styles.signup }>Criar uma Conta</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		fontFamily: "sriracha",
		fontSize: 30,
	},
	content: {
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	btn: {
		padding: 15, 
		alignItems: 'center', 
		borderRadius: 50
	},
	textBtn: {
		color: "#fff",
		fontWeight: "bold"
	},
	forgotPass: {
		textAlign: "right",
		marginTop: -5,
		fontSize: 12,
		color: "#9313ad",
		fontStyle: "italic",
		marginRight: 5
	},
	divider: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 70,
	},
	dividerText: {
		color: "gray",
		marginHorizontal: 10,
		fontFamily: "sriracha"
	},
	line: {
		borderTopWidth: 1,
		flex: 1,
		borderColor: "#D4D4D4",
		marginTop: -1
	},
	footer: {
		marginTop: 30
	},
	signup: {
		fontSize: 12,
		color: "#9313ad",
		fontStyle: "italic"
	}
});