import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Guest } from "../../components/Guest";



export default function Home() {
  function handleGuestAdd(){
    console.log('Added')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event's Name
      </Text>

      <Text style={styles.eventDate}>
        Wednesday, September 7, 2023.
      </Text>
      <View style={styles.form}>
      <TextInput 
      placeholder="guest's name"
      placeholderTextColor={"#6B6B6B"}
      style={styles.input} 
      />
      <TouchableOpacity style={styles.button} onPress={handleGuestAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
      <Guest />
    </View>
  )
}
