import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type GuestProps = {
	name: string
}

export function Guest({name}: GuestProps){
	return(
		<View style={styles.container}>
			<Text style={styles.name}>{name}</Text>
			<TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
		</View>
	)
}