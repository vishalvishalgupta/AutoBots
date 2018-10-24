import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LetOutSpace2 extends Component {
  constructor() {
    super();
    this.state = {
      value: 'yes',
    };
  }
  static navigationOptions = {
    title: 'Choose an Option',
  };
  render() {
    const window = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <View>
            <Image
              style={{ width: 250, height: 150, paddingTop: -35, marginTop: 45 }}
              source={require('../assets/Splashscreen4.png')}
            />
          </View>
        <View>
          <View style={styles.view1}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('AppSell')}
              style={styles.button}>
              <Text style={styles.buttonText}>I am HCI</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.view2}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.button}>
              <Text style={styles.buttonText}>I am a buyer</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  // textBtn: {
  //   fontFamily: 'Cochin',
  // },
  button: {
    backgroundColor: '#2F6DA4',
    height: 45,
    width: 300,
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 18,
    borderRadius: 25,
    color: '#ffffff',
    paddingVertical: 12,
    borderColor: '#FFC000',
    borderWidth: 2,
  },
  view1: {
    margin: 5,
  },
  view2: {
    margin: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  }
  // button: {
  //   backgroundColor: 'grey',
  //   // width: 100,
  //   // height: 25,
  //   // paddingTop: 100,
  //   // borderColor: 'transparent',
  //   // borderWidth: 0,
  //   // borderRadius: 5,
  // },
  // androidStartQuizBtn: {
  //   backgroundColor: 'grey',
  //   width: '100%',
  //   paddingTop: '20%',
  //   height: '30%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});