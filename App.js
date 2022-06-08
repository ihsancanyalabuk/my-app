import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Switch } from "react-native-switch";
import React, { useState, useEffect } from "react";
import Home from "./src/Homepage/Homepage"
import Edit from "./src/EditSwitches/Edit"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const axios = require("axios");
const Stack = createStackNavigator();


export default class App extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
