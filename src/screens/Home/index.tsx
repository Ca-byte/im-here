import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { Guest } from "../../components/Guest";




export default function Home() {
  const guests = [
    'Goran','Maja', 'Jeh', 'Milijana', 'Luiza', 'Celia', 'Hamilton', 'Maycon', 'Mariane'
  ];

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
      <ScrollView showsVerticalScrollIndicator={false}>      
      {
        guests.map((guest)=> (

          <Guest 
          key={guest}
          name={guest} 
          onRemove={() => handleRemoveGuest(guest)}/>
        ))
      }
      </ScrollView>
    </View>
  )
}
