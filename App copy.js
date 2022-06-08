import * as React from "react";
import { Button, View ,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Row, Col } from 'react-native-responsive-grid-system';

import { Switch } from 'react-native-switch';

function HomeScreen({ navigation }) {

  

  return (
    <View style={{ justifyContent: "space-between" }}>
      <Row >
        <Col xs={6} >
        <Text>Switch 1</Text>
        </Col>

        <Col xs={6} >
        <Switch
          activeText={'On'}
          inActiveText={'Off'}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          switchLeftPx={2} 
          switchRightPx={2} 
          switchWidthMultiplier={2} 
          switchBorderRadius={30}
          value={false}
        />
        </Col>

        <Col xs={6}>
        <Text>AA</Text>

        </Col>

        <Col xs={6}>
          <Text>AA</Text>
        </Col>
      </Row>

      <Button
        title="Edit Switches"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Save Changes" />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
