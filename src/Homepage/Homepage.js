import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { Switch } from 'react-native-switch';
import React ,{useState,useEffect} from 'react';


export default class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open0 : false,
      open1 : false,
      open2 : false,
      open3 : false,
    };
    this.getRelays();
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      titleText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom:10
      }
    });
    
  }


  handleChange(id,state,open) {
    
    if(id == 0){
      this.setState(state => ({...state, open0: !open}))
    }else if(id == 1){
      this.setState(state => ({...state, open1: !open}))
    }else if(id == 2){
      this.setState(state => ({...state, open2: !open}))
    }else{
      this.setState(state => ({...state, open3: !open}))
    }
    
    if (open){
      fetch("http://10.8.32.58:5000/turnOff" + "?relayID=" + id)
    }else{
      fetch("http://10.8.32.58:5000/turnOn" + "?relayID=" + id)
    }
    
  }

  getRelays(){


    fetch('http://10.8.32.58:5000/getRelays', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
      console.log(`statusCode: ${res.status}`)
      this.setState(res.data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  render(){
    
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.titleText}>EMBEDDED PROJECT</Text>
        <View
        style={{
          marginBottom: 20,
        }}>


        <Text>Switch 1</Text>
        <Switch
          activeText={'On'}
          inActiveText={'Off'}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={this.state.open0 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => this.handleChange(0,this.state,this.state.open0)}
          switchLeftPx={2} 
          switchRightPx={2} 
          switchWidthMultiplier={2} 
          switchBorderRadius={30}
          value={this.state.open0}
        />

        <Text>Switch 2</Text>
        <Switch
          activeText={'On'}
          inActiveText={'Off'}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={this.state.open1 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => this.handleChange(1,this.state,this.state.open1)}
          value={this.state.open1}
        />
        <Text>Switch 3</Text>
        <Switch
          activeText={'On'}
          inActiveText={'Off'}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={this.state.open2 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => this.handleChange(2,this.state,this.state.open2)}
          value={this.state.open2}
          
        />
        <Text>Switch 4</Text>
        <Switch
          activeText={'On'}
          inActiveText={'Off'}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={this.state.open3 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => this.handleChange(3,this.state,this.state.open3)}
          value={this.state.open3}
        />
        </View>
        <Button
            title="Edit Switches"
            onPress={() => this.props.navigation.navigate("Edit")}
          />
      </View>
    );
  }
  
}

