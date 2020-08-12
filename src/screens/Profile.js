import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

import { Feather, Foundation } from '@expo/vector-icons';

export default function Profile({ navigation }) {
	return (
		<View style={ styles.container }>
			<View style={ styles.header }>
				<TouchableOpacity onPress={ () => navigation.openDrawer() }>
					<Foundation name="align-left" size={ 24 } color="#fff" />
				</TouchableOpacity>
				
				<View style={{ flex: 1 }} />

				<TouchableOpacity >
					<Feather name="settings" size={ 24 } color="#fff" />
				</TouchableOpacity>
			</View>
				
			<View style={ styles.content }>

				<View style={ styles.user }>
					<Image style={ styles.image } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlbaGK7ge1pdZEHyuVi4wE4beBJFqxiorDCA&usqp=CAU" }} />
					<Text style={ styles.name }>Anna Hanks</Text>
					<Text style={ styles.email }>anna.h@gmail.com</Text>
				</View>

				<View style={ styles.informations }>
					<View style={{ alignItems: "center"  }}>
						<Text style={[ styles.number, { color: "#2CD90A" } ]}>10</Text>
						<Text style={ styles.desc }>Assistidos</Text>
					</View>

					<View style={{ alignItems: "center"  }}>
						<Text style={[ styles.number, { color: "#FFC600" } ]}>15</Text>
						<Text style={ styles.desc }>Favoritados</Text>
					</View>
				</View>

				<View>
					<Text style={ styles.cardTitle }>Meus Favoritos</Text>
					<View style={ styles.list }>
						<Image style={ styles.thumbnail } source={{ uri: "https://images.wallpaperscraft.com/image/mountain_peak_lake_181832_1280x720.jpg" }} />
						<Image style={ styles.thumbnail } source={{ uri: "https://images.wallpaperscraft.com/image/mountain_peak_lake_181832_1280x720.jpg" }} />
						<Image style={ styles.thumbnail } source={{ uri: "https://images.wallpaperscraft.com/image/mountain_peak_lake_181832_1280x720.jpg" }} />
					</View>
				</View>

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F61B35",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 45,
		marginHorizontal: 20
	},
	content: {
		backgroundColor: "#fff",
		padding: 10,
		flex: 1,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
	},
	user: {
		alignItems: "center",
		marginTop: -60
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 100,
		borderWidth: 4,
		borderColor: "#fff"
	},
	name: {
		fontFamily: "sriracha",
		fontSize: 24
	},
	email: {
		fontFamily: "sriracha",
		fontSize: 16,
		color: "gray",
		marginTop: -10
	},
	informations: {
		flexDirection: "row",
		marginVertical: 20,
		justifyContent: "space-around"
	},
	number: {
		fontSize: 24,
		fontWeight: "bold"
	},
	desc: {
		fontWeight: "bold"
	},
	cardTitle: {
		fontFamily: "sriracha",
		fontSize: 24,
		marginLeft: 15
	},
	list: {
		marginVertical: 10,
		flexDirection: "row"
	},
	thumbnail: {
		borderRadius: 10,
		marginRight: 10,
		width: 115,
		height: 85,
		marginLeft: 15
	},
});