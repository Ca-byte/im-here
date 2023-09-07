import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";



export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event's Name
      </Text>

      <Text style={styles.eventDate}>
        Wednesday, September 7, 2023.
      </Text>
    </View>
  )
}
