import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert , ScrollView} from "react-native";
import { Switch } from "react-native-switch";
import { useState, useEffect } from "react";
import { Form, FormItem, Picker, Label } from "react-native-form-component";
import * as React from "react";

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relayID : 0,
      positive1 : "",
      positive2 : "",
      positive3 : "",
      positive4 : "",
      positive5 : "",
      negative1 : "",
      negative2 : "",
      negative3 : "",
      negative4 : "",
      negative5 : "",
    };
    this.handleRelayID = this.handleRelayID.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
    this.trainRelay = this.trainRelay.bind(this);
  }


  handleCommand(value,name) {
    this.setState((values) => ({ ...values, [name]: value }));
    console.log(this.state)
  }

  handleRelayID(value) {
    this.setState((values) => ({ ...values, "relayID": value }));
    console.log(this.state)
  }

  trainRelay(){

    fetch('http://10.8.32.58:5000/trainRelay', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "relayID": this.state.relayID,
        "turnOnCases": [this.state.positive1,this.state.positive2,this.state.positive3,this.state.positive4,this.state.positive5],
        "turnOffCases": [this.state.negative1,this.state.negative2,this.state.negative3,this.state.negative4,this.state.negative5],
      }),
      mode: 'no-cors',
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  render() {
    return (
      <ScrollView style={{marginBottom:20}} >
        <Picker
          items={[
            { label: "Relay 1", value: 0 },
            { label: "Relay 2", value: 1 },
            { label: "Relay 3", value: 2 },
            { label: "Relay 4", value: 3 },
          ]}
          label="Select Relay to Program"
          selectedValue={this.state.relayID}
          onSelection={(item) => this.handleRelayID(item.value)}
        />

        <FormItem label="Positive Command 1" isRequired  onChangeText={(value) => this. handleCommand(value,"positive1")} name="positive1" value={this.state.positive1}/>
        <FormItem label="Positive Command 2" isRequired  onChangeText={(value) => this. handleCommand(value,"positive2")} name="positive2" value={this.state.positive2}/>
        <FormItem label="Positive Command 3" isRequired  onChangeText={(value) => this. handleCommand(value,"positive3")} name="positive3" value={this.state.positive3}/>
        <FormItem label="Positive Command 4" isRequired  onChangeText={(value) => this. handleCommand(value,"positive4")} name="positive4" value={this.state.positive4}/>
        <FormItem label="Positive Command 5" isRequired  onChangeText={(value) => this. handleCommand(value,"positive5")} name="positive5" value={this.state.positive5}/>
        <FormItem label="Negative Command 1" isRequired  onChangeText={(value) => this. handleCommand(value,"negative1")} name="negative1" value={this.state.negative1}/>
        <FormItem label="Negative Command 2" isRequired  onChangeText={(value) => this. handleCommand(value,"negative2")} name="negative2" value={this.state.negative2}/>
        <FormItem label="Negative Command 3" isRequired  onChangeText={(value) => this. handleCommand(value,"negative3")} name="negative3" value={this.state.negative3}/>
        <FormItem label="Negative Command 4" isRequired  onChangeText={(value) => this. handleCommand(value,"negative4")} name="negative4" value={this.state.negative4}/>
        <FormItem label="Negative Command 5" isRequired  onChangeText={(value) => this. handleCommand(value,"negative5")} name="negative5" value={this.state.negative5}/>

        <Button title="Save Changes" onPress={() => this.trainRelay()}/>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </ScrollView>
    );
  }
} 
