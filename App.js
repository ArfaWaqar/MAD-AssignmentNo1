import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./frontend/screens/HomeScreen";
import ProfileScreen from "./frontend/screens/ProfileScreen";
import ProjectsScreen from "./frontend/screens/ProjectsScreen";
import ContactScreen from "./frontend/screens/ContactScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
  <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ headerShown: false }}
  />

  <Stack.Screen
    name="Profile"
    component={ProfileScreen}
    options={{ title: "Profile" }}
  />

  <Stack.Screen
    name="Project"
    component={ProjectsScreen}
    options={{ title: "My Projects" }}
  />

  <Stack.Screen
    name="Support"
    component={ContactScreen}
    options={{ title: "Contact Support" }}
  />
</Stack.Navigator>
    </NavigationContainer>
  );
}