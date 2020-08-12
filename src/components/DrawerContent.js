import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';

import * as info from '../../app.json';

export default function DrawerContent({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<View style={ styles.header }>
				<Image style={ styles.logo } source={{ uri: "https://bootstraplogos.com/wp-content/uploads/edd/2018/10/logo.png" }} />
				<Text style={ styles.appName }>Nome do App</Text>
			</View>

			<View>
				<Text style={ styles.divider }>Menu</Text>
			</View>

			<View style={ styles.menu }>
				<TouchableOpacity style={ styles.item } onPress={ () => navigation.navigate("Home") }>
					<Feather name="home" size={ 20 } color="#B209D0" />
					<Text style={ styles.itemText }>Dashboard</Text>
				</TouchableOpacity>

				<TouchableOpacity style={ styles.item } onPress={ () => navigation.navigate("ProfileRoutes") }>
					<Feather name="user" size={ 20 } color="#F61B35" />
					<Text style={ styles.itemText }>Perfil</Text>
				</TouchableOpacity>
			</View>

			<View>
				<Text style={ styles.divider }>Opções</Text>
			</View>

			<View style={ styles.menu }>
				<TouchableOpacity style={ styles.item }>
					<Feather name="info" size={ 20 } color="#20D60D" />
					<Text style={ styles.itemText }>Informações</Text>
				</TouchableOpacity>

				<TouchableOpacity style={ styles.item }>
					<Feather name="log-out" size={ 20 } color="#FEB401" />
					<Text style={ styles.itemText }>Sair</Text>
				</TouchableOpacity>
			</View>

			<View style={ styles.footer }>
				<Text style={{ color: 'gray', fontSize: 12, fontFamily: "sriracha" }}>
					Versão: { info.expo.version }
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		marginTop: 25,
		paddingVertical: 25
	},
	logo: {
		width: 50,
		height: 40,
		marginRight: 15
	},
	appName: {
		fontSize: 22,
		fontFamily: "sriracha",
		paddingTop: 3
	},
	divider: {
		color: "#D4D4D4",
		marginLeft: 25,
		marginVertical: 10,
		fontSize: 16,
		fontFamily: "sriracha"
	},
	menu: {
		marginLeft: 25
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 10,
		marginBottom: 25
	},
	itemText: {
		fontSize: 16,
		marginLeft: 15,
		marginTop: 2,
		fontWeight: "bold"
	},
	footer: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		paddingBottom: 20
	}
});