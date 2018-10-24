import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAwareScrollView,
  Form,
  ImageBackground,
} from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import { Constants } from 'expo';
export default class FormPageOne extends Component {
  constructor() {
    super();
    this.state = {
      value: 'yes',
    };
    this.onPress = this.onPress.bind(this);
  }
  static navigationOptions = {
    title: 'Enter Details',
  };

  onPress() {
    console.log('called');
    const { navigate } = this.props.navigation;
    navigate('SeventhScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FormLabel>Name</FormLabel>
          <FormInput onChangeText={text => this.setState({ text })} />
          <FormLabel>Address</FormLabel>
          <FormInput onChangeText={text => this.setState({ text })} />
          <FormLabel>City</FormLabel>
          <FormInput onChangeText={text => this.setState({ text })} />
          <FormLabel>Pincode</FormLabel>
          <FormInput onChangeText={Number => this.setState({ Number })} />
          <FormLabel>How many spaces do you have</FormLabel>
          <FormInput onChangeText={Number => this.setState({ Number })} />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 35,
    backgroundColor: 'green',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
  },
});
