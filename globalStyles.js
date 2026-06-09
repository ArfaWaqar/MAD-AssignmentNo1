import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  overlay: {
  flex: 1,
  padding: 20,
  backgroundColor: "rgba(0,0,0,0.4)",
  justifyContent: "center",   
  alignItems: "center",       
},
  button: {
    width: "85%",
    padding: 15,
    backgroundColor: "#6C4DD9",
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
})