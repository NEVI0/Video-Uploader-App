import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';

import * as info from '../../app.json';

export default function DrawerContent({ navigation }) {
	return (
		<View style={{ flex: 1, paddingHorizontal: 15 }}>
			<View style={ styles.header }>
				<Image style={ styles.logo } source={{ uri: "https://bootstraplogos.com/wp-content/uploads/edd/2018/10/logo.png" }} />
			</View>

			<View>
				<TouchableOpacity style={ styles.item } onPress={ () => navigation.navigate("Home") }>
					<Feather name="home" size={ 20 } color="black" />
					<Text style={ styles.itemText }>Dashboard</Text>
				</TouchableOpacity>

				<TouchableOpacity style={ styles.item } onPress={ () => navigation.navigate("Profile") }>
					<Feather name="user" size={ 20 } color="black" />
					<Text style={ styles.itemText }>Perfil</Text>
				</TouchableOpacity>

				<TouchableOpacity style={ styles.item }>
					<Feather name="info" size={ 20 } color="black" />
					<Text style={ styles.itemText }>Informações</Text>
				</TouchableOpacity>

				<TouchableOpacity style={ styles.item }>
					<Feather name="log-out" size={ 20 } color="black" />
					<Text style={ styles.itemText }>Sair</Text>
				</TouchableOpacity>
			</View>

			<View style={ styles.footer }>
				<Text style={{ color: 'gray', fontSize: 12 }}>Versão: { info.expo.version }</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingVertical: 30,
		alignItems: "center",
		marginTop: 25,
	},
	logo: {
		width: 160,
		height: 130
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		borderRadius: 10,
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