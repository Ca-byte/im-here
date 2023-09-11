import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type GuestProps = {
	name: string
	onRemove: ()=> void
}

export function Guest({name, onRemove}: GuestProps){
	return(
		<View style={styles.container}>
			<Text style={styles.name}>{name}</Text>
			<TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={onRemove}>-</Text>
      </TouchableOpacity>
		</View>
	)
}