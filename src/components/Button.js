import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

export default (props) => {
	return (
		<TouchableHighlight onPress={props.onClick}>
			<Text style={styles.info}>{props.label}</Text>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	info: {
		fontSize: 40,
		height: Dimensions.get('window').width / 4,
		width: Dimensions.get('window').width / 4,
		padding: 20,
		backgroundColor: '#f0f0f0',
		textAlign: 'center',
		borderWidth: 1,
		borderColor: '#888',
	},
});
