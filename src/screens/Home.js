import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

import { Feather, Foundation } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
	return (
		<ScrollView showsVerticalScrollIndicator={ false }>
			<View style={ styles.container }>

				<TouchableOpacity style={ styles.menuBtn } onPress={ () => navigation.openDrawer() }>
					<Foundation name="align-left" size={ 24 } color="#B209D0" />
				</TouchableOpacity>

				<View style={ styles.userInfo }>
					<Text style={ styles.userName }>Olá Anna</Text>
					<Text style={ styles.title }>Dashboard</Text>
				</View>

				<Image style={ styles.mainImage } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ7CoqlHVkGqkv8cjCtNYY9pI99vjRVpugZg&usqp=CAU" }} />

				<View style={ styles.searchBox }>
					<TextInput placeholder="Procure por videos..." style={ styles.input } />
					<Feather name="search" size={ 24 } color="#000" />
				</View>

				<Text style={ styles.cardTitle }>Ultimos Videos</Text>

				<View style={ styles.card }>
					<View style={ styles.item }>
						<Image style={ styles.thumbnail } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzr0R9ziCVWDGq7tD8jO-FhKrY_KxfqpxW1g&usqp=CAU" }} />
						<Text style={ styles.videoDescription }>Descrição do video...</Text>
					</View>
					
					<View style={ styles.item }>
						<Image style={ styles.thumbnail } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzr0R9ziCVWDGq7tD8jO-FhKrY_KxfqpxW1g&usqp=CAU" }} />
						<Text style={ styles.videoDescription }>Descrição do video...</Text>
					</View>
					
					<View style={ styles.item }>
						<Image style={ styles.thumbnail } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzr0R9ziCVWDGq7tD8jO-FhKrY_KxfqpxW1g&usqp=CAU" }} />
						<Text style={ styles.videoDescription }>Descrição do video...</Text>
					</View>
				</View>

				<TouchableOpacity onPress={ () => navigation.navigate("AllVideos") }>
					<LinearGradient
          				colors={["#B209D0", "#9313ad", "#6d0584"]}
          				style={ styles.btn }
          			>
			          	<Text style={ styles.textBtn }>Ver Mais</Text>
			        </LinearGradient>
				</TouchableOpacity>

			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	menuBtn: {
		marginVertical: 25,
		width: 25
	},
	userInfo: {
		alignItems: "flex-start",
	},
	userName: {
		color: "gray",
		fontSize: 16,
		fontFamily: "sriracha"
	},
	title: {
		fontSize: 24,
		fontFamily: "sriracha",
		marginTop: -10
	},
	mainImage: {
		width: "100%",
		height: 150,
		borderRadius: 10,
		marginVertical: 25
	},
	searchBox: {
		borderRadius: 10,
		backgroundColor: '#fff',
        padding: 8,
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		marginRight: 10,
		flex: 1
	},
	cardTitle: {
		marginTop: 25,
		marginBottom: 10,
		fontSize: 20,
		fontWeight: "bold",
 	},
	card: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		backgroundColor: "#fff",
		marginBottom: 15
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		marginVertical: 5
	},
	thumbnail: {
		borderRadius: 10,
		backgroundColor: "red",
		marginRight: 10,
		width: 75,
		height: 55
	},
	videoDescription: {
		color: "gray"
	},
	btn: {
		padding: 15, 
		alignItems: 'center', 
		borderRadius: 10
	},
	textBtn: {
		color: "#fff",
		fontWeight: "bold"
	}
});