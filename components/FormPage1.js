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
export default class FifthScreen extends Component {
  constructor() {
    super();
    this.state = {
      value: 'yes',
    };
    this.onPress = this.onPress.bind(this);
  }
  static navigationOptions = {
    title: 'Question 5',
  };

  onPress() {
    console.log('called');
    const { navigate } = this.props.navigation;
    navigate('SixthScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Would you like to provide services to the clients through a online platform?</Text>
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
