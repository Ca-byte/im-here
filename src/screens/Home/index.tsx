import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Guest } from "../../components/Guest";
import { FormEvent } from "react";



export default function Home() {

  function handleGuestAdd(){
    console.log('Added')

  }

  function handleRemoveGuest(name: string){
    console.log(`You just deleted ${name}`)
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
      <Guest name="Oprah winfrey" onRemove={() => handleRemoveGuest("Oprah winfrey")}/>
    </View>
  )
}
