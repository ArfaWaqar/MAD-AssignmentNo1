import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

export default function ProfileScreen() {

const [introduction, setIntroduction] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={globalStyles.overlay}>

    
        <Text style={styles.title}>My Profile</Text>

    
       <Image
  source={{
    uri: "https://i.pinimg.com/originals/50/7d/36/507d3676975ca15a5ce73484fdf91978.jpg"
  }}
  style={styles.profileImage}
/>
        {/* Basic Info */}
        <Text style={styles.name}>Arfa Waqar</Text>
        <Text style={styles.degree}>Computer Scientist</Text>
        <Text style={styles.university}>
          Riphah International University
        </Text>

        <View style={styles.card}>

          <Text style={styles.cardTitle}>Introduction</Text>

          <TextInput
            placeholder="Write your introduction here..."
            multiline
            value={introduction}
            onChangeText={setIntroduction}
            style={styles.introInput}
          />


          <Text style={styles.previewTitle}>
            Live Introduction:
          </Text>

          <Text style={styles.introText}>
            {introduction}
          </Text>

        </View>


        <View style={[styles.card, styles.contactCard]}>

          <Text style={styles.cardTitle}>Contact Info</Text>

          <View style={styles.row}>
            <MaterialIcons name="email" size={22} color="#6C4DD9" />
            <Text style={styles.cardText}>
              arfawaqar702@gmail.com
            </Text>
          </View>

          <View style={styles.row}>
            <FontAwesome name="phone" size={22} color="#6C4DD9" />
            <Text style={styles.cardText}>
              03260466828
            </Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="location-sharp" size={22} color="#6C4DD9" />
            <Text style={styles.cardText}>Rawalpindi</Text>
          </View>

        </View>

      </ScrollView>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({

  background: {
    flex: 1,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  degree: {
    color: "#fff",
    textAlign: "center",
    marginTop: 2,
  },

  university: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#F4E1C1",
    borderRadius: 18,
    padding: 18,
    marginVertical: 10,
  },

  contactCard: {
    paddingVertical: 22,
    paddingHorizontal: 28,
    width: "100%",
    alignSelf: "center"
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 12,
  },

  introInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    minHeight: 100,
    textAlignVertical: "top"
  },

  previewTitle:{
    marginTop:10,
    fontWeight:"bold"
  },

  introText:{
    fontSize:14,
    lineHeight:20,
    marginTop:5,
    textAlign:"justify"
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  cardText: {
    marginLeft: 12,
    fontSize: 15,
  },

});