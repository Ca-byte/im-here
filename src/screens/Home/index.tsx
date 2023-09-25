import { Text, View, TextInput, TouchableOpacity,FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Guest } from "../../components/Guest";
import { useState } from "react";




export default function Home() {
  const [guests, setGuests] = useState(['Carol'])

  function handleGuestAdd(){
    if(guests.includes("Goran")){
      return Alert.alert(`This guest, already exist!`)
    }

    setGuests(prevState => [...prevState, 'Goran']);
  }

  function handleRemoveGuest(name: string){
    Alert.alert("Remove", `Are you sure about to delete ${name}?` ,[
    { 
      text: "yes",
      onPress: ()=> Alert.alert("Deleted!")
    },
    {
      text: "não",
      style: "cancel"
    }
    ])
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
      <FlatList
        data={guests}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <Guest 
          key={item}
          name={item} 
          onRemove={() => handleRemoveGuest(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=> (
          <Text style={styles.listEmptyText}>Oh no! Nobody has done a check-in yet :(</Text>
        )}

       />
    </View>
  )
}
