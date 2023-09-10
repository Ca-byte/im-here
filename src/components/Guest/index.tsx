import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Guest(){
	return(
		<View style={styles.container}>
			<Text style={styles.name}>Caroline Vieira</Text>
			<TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
		</View>
	)
}