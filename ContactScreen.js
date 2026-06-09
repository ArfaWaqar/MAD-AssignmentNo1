import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert
} from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

export default function ContactScreen({ navigation }) {

const [message,setMessage]=useState("")

const handleSubmit=()=>{

if(message===""){
Alert.alert("Error","Please enter your message")
}
else{
Alert.alert("Success","Your message has been sent")
setMessage("")
}

}

return (

<ScrollView style={styles.container}>

<View style={styles.header}>
<Text style={styles.headerTitle}>
Contact Support
</Text>
</View>


<View style={styles.card}>

<View style={styles.row}>
<Ionicons name="call" size={22} color="#fff" />
<Text style={styles.cardText}>
+92 326 046 6828
</Text>
</View>

<View style={styles.row}>
<MaterialIcons name="email" size={22} color="#fff" />
<Text style={styles.cardText}>
arfawaqar702@gmail.com
</Text>
</View>

</View>


<View style={styles.messageBox}>

<Text style={styles.sectionTitle}>
Message Box
</Text>

<TextInput
placeholder="Write your issue here..."
style={styles.input}
multiline
value={message}
onChangeText={setMessage}
/>


<TouchableOpacity
style={globalStyles.button}
onPress={handleSubmit}
>

<Text style={globalStyles.buttonText}>
Submit
</Text>

</TouchableOpacity>

</View>

</ScrollView>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#4B2C82"
},

header:{
flexDirection:"row",
alignItems:"center",
padding:20
},

headerTitle:{
color:"#fff",
fontSize:20
},

card:{
backgroundColor:"#6A3FC8",
margin:20,
padding:20,
borderRadius:15
},

row:{
flexDirection:"row",
alignItems:"center",
marginBottom:15
},

cardText:{
color:"#fff",
marginLeft:15
},

messageBox:{
backgroundColor:"#F3E5D8",
margin:20,
padding:20,
borderRadius:15
},

sectionTitle:{
fontSize:18,
fontWeight:"bold",
marginBottom:15
},

input:{
backgroundColor:"#fff",
padding:10,
borderRadius:10,
height:80,
marginBottom:15
}

});