import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={styles.background}
    >
      <View style={globalStyles.overlay}>
        <Text style={styles.title}>🎓 My Portfolio</Text>
        <Text style={styles.subtitle}>Stay Organized. Stay Ahead.</Text>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={globalStyles.buttonText}>👤 My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate("Project")}
        >
          <Text style={globalStyles.buttonText}>📁 My Projects</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate("Support")}
        >
          <Text style={globalStyles.buttonText}>✉️ Contact Support</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 40,
  },
});