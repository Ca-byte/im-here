import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: '#1F1E25',
		borderRadius:5,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 12
	},

	name: {
		flex: 1,
		color: '#FFFF',
		fontSize: 16,
		paddingLeft: 16

	},

	button:{
	 width: 56,
	 height: 56,
	 borderRadius: 5,
	 backgroundColor: '#FF00BD',
	 alignItems: "center",
	 justifyContent: "center",
 }, 

 buttonText: {
	 color: '#FFFF',
	 fontSize: 24,
 }
})