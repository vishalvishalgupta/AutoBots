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

export default class ThankYou extends Component {
  constructor() {
    super();
    this.state = {
      value: 'yes',
    };
    this.onPress = this.onPress.bind(this);
  }
  static navigationOptions = {
    title: 'Question 6',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Thanks for giving your valuable time.</Text>
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
});
