import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  Switch
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

export default function ProjectsScreen() {

const [darkMode,setDarkMode]=useState(false)

return (

<ImageBackground
source={require("../../assets/images/background.png")}
style={styles.background}
>

<View style={[
globalStyles.overlay,
{backgroundColor: darkMode ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.3)"}
]}>


<View style={styles.header}>

<Text style={styles.title}>My Projects</Text>

<View style={styles.toggleRow}>

<Ionicons
name={darkMode ? "moon" : "sunny"}
size={26}
color={darkMode ? "white" : "yellow"}
/>

<Switch
value={darkMode}
onValueChange={setDarkMode}
/>

</View>

</View>


<ScrollView>

<View style={styles.card}>

<Image
source={require("../../assets/images/background1.jpg")}
style={styles.projectImage}
/>

<Text style={styles.projectTitle}>
Music Player (C++ | WinAPI)
</Text>

</View>

<View style={styles.card}>

<Image
source={require("../../assets/images/background2.jpg")}
style={styles.projectImage}
/>

<Text style={styles.projectTitle}>
Hotel Management System
</Text>

</View>

<View style={styles.card}>

<Image
source={require("../../assets/images/business and sales.jpeg")}
style={styles.projectImage}
/>

<Text style={styles.projectTitle}>
Business and Sales Management
</Text>

</View>

</ScrollView>

</View>

</ImageBackground>

)

}

const styles = StyleSheet.create({

background:{
flex:1
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:20,
width:"100%"
},

toggleRow:{
flexDirection:"row",
alignItems:"center",
gap:10
},

title:{
color:"#fff",
fontSize:24,
fontWeight:"bold"
},

card:{
backgroundColor: "#F4E1C1",
    borderRadius: 10,
    marginBottom: 30,
    overflow: "hidden",
   width: "100%",
marginHorizontal: 35, 
alignSelf:"center"
},

projectImage:{
width:"100%",
height:160
},

projectTitle:{
padding:12,
fontWeight:"bold"
}

});