import React from 'react';
import { StyleSheet, Modal, View, Text } from 'react-native';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default function VideoOptions({ isVisible, onClose }) {
	return (
		<Modal
			animationType="slide"
			statusBarTranslucent={ true }
			transparent={ true }
			visible={ isVisible }
			onRequestClose={ () => onClose() }
		>
			<View style={ styles.container }>
				<View style={ styles.content }>

					<Text style={ styles.title }>Opções</Text>

					<View style={ styles.item }>
						<MaterialCommunityIcons name="check-all" size={ 22 } color="#2CD90A" />
						<Text style={ styles.text }>Marcar como Visto</Text>
					</View>

					<View style={ styles.item }>
						<AntDesign name="star" size={ 22 } color="#FFC600" />
						<Text style={ styles.text }>Adicionar aos Favoritos</Text>
					</View>

				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: "flex-end"
	},
	content: {
		backgroundColor: "#fff",
		padding: 20,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20
	},
	title: {
		fontSize: 22,
		fontFamily: "sriracha",
		marginTop: -5
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 15,
		marginBottom: 5
	},
	text: {
		fontSize: 16,
		marginLeft: 15,
		fontWeight: "bold"
	}
});