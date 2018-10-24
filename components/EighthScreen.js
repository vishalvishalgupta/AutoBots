import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Constants } from 'expo';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export default class EighthScreen extends Component {
  constructor() {
    super();
    this.state = {
      value: 'yes',
    };
    this.onPress = this.onPress.bind(this);
  }
  static navigationOptions = {
    title: 'Question 8',
  };

  onPress() {
    console.log('called');
    const { navigate } = this.props.navigation;
    navigate('NinthScreen');
  }

  render() {
    var radio_props = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ];
    return (
      <View style={styles.container}>
        // <TouchableOpacity style={styles.button} onPress={this.onPress}>
        //   <Text>Next</Text>
        // </TouchableOpacity>
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
    backgroundColor: '#26b67c',
  },
  paragraph: {
    fontSize: 18,
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
