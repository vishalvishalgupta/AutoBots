import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import { Constants } from 'expo';

export default class FourthScreen extends Component {
  constructor() {
    super();
    this.state = {
      value: 'yes',
    };
    this.onPress = this.onPress.bind(this);
  }
  static navigationOptions = {
    title: 'Choose an Option',
  };

  onPress() {
    console.log('called');
    const { navigate } = this.props.navigation;
    navigate('FormPageOne');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 150, height: 160 }}>
          <Image
            style={{ width: 150, height: 100 }}
            source={require('../assets/basepage.png')}
          />
        </View>
        <View>
          <View style={styles.view1}>
            <TouchableOpacity onPress={this.onPress}>
              <Text style={styles.text}>COMMERCIAL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <TouchableOpacity>
              <Text style={styles.text}>PRIVATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  // textBtn: {
  //   fontFamily: '',
  // },
  text: {
    borderWidth: 2,
    padding: 12,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#5475a8',
    textShadowColor: 'blue',
    fontFamily: '',
    borderColor: 'grey',
    backgroundColor: '#e7e7e7',
  },
  view1: {
    margin: 8,
  },
  view2: {
    margin: 8,
  }
});
