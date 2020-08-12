import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

import { Ionicons, Feather, SimpleLineIcons } from '@expo/vector-icons';

import VideoOptions from '../components/VideoOptions';

export default function AllVideos({ navigation }) {

	const [ modalVisible, setModalVisible ] = useState(false);

	return (
		<View style={ styles.container }>
			
			<TouchableOpacity style={ styles.returnBtn } onPress={ () => navigation.pop() }>
				<Ionicons name="ios-return-left" size={ 26 } color="#B209D0" />
			</TouchableOpacity>

			<Text style={ styles.title }>Últimos Videos</Text>

			<View style={ styles.searchBox }>
				<TextInput placeholder="Procure por videos..." style={ styles.input } />
				<Feather name="search" size={ 24 } color="#000" />
			</View>

			<View>

				<View style={ styles.item }>
					<Image style={ styles.thumbnail } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzr0R9ziCVWDGq7tD8jO-FhKrY_KxfqpxW1g&usqp=CAU" }} />
					<Text style={ styles.videoDescription }>Descrição do video que vai aparecer para o usuario quando ele clicar em ver mais...</Text>
					<TouchableOpacity onPress={ () => setModalVisible(true) }>
						<SimpleLineIcons name="options-vertical" size={ 18 } color="black" />
					</TouchableOpacity>
				</View>
				<View style={ styles.item }>
					<Image style={ styles.thumbnail } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzr0R9ziCVWDGq7tD8jO-FhKrY_KxfqpxW1g&usqp=CAU" }} />
					<Text style={ styles.videoDescription }>Descrição do video que vai aparecer para o usuario quando ele clicar em ver mais...</Text>
					<TouchableOpacity onPress={ () => setModalVisible(true) }>
						<SimpleLineIcons name="options-vertical" size={ 18 } color="black" />
					</TouchableOpacity>
				</View>
				<View style={ styles.item }>
					<Image style={ styles.thumbnail } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzr0R9ziCVWDGq7tD8jO-FhKrY_KxfqpxW1g&usqp=CAU" }} />
					<Text style={ styles.videoDescription }>Descrição do video que vai aparecer para o usuario quando ele clicar em ver mais...</Text>
					<TouchableOpacity onPress={ () => setModalVisible(true) }>
						<SimpleLineIcons name="options-vertical" size={ 18 } color="black" />
					</TouchableOpacity>
				</View>
				<View style={ styles.item }>
					<Image style={ styles.thumbnail } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzr0R9ziCVWDGq7tD8jO-FhKrY_KxfqpxW1g&usqp=CAU" }} />
					<Text style={ styles.videoDescription }>Descrição do video que vai aparecer para o usuario quando ele clicar em ver mais...</Text>
					<TouchableOpacity onPress={ () => setModalVisible(true) }>
						<SimpleLineIcons name="options-vertical" size={ 18 } color="black" />
					</TouchableOpacity>
				</View>

			</View>

			<VideoOptions isVisible={ modalVisible } onClose={ () => setModalVisible(false) } />

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	returnBtn: {
		marginVertical: 25
	},
	title: {
		fontSize: 24,
		fontFamily: "sriracha",
	},
	searchBox: {
		borderRadius: 10,
		backgroundColor: '#fff',
        padding: 8,
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20
	},
	input: {
		marginRight: 10,
		flex: 1
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		marginVertical: 10
	},
	thumbnail: {
		borderRadius: 10,
		backgroundColor: "red",
		width: 100,
		height: 75
	},
	videoDescription: {
		color: "gray",
		flex: 1,
		textAlign: "justify",
		marginHorizontal: 15
	},
});