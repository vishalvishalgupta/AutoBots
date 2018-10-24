import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Constants } from 'expo';
import { KeyboardAvoidingView } from 'react-native';
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      value: 'yes',
    };
    this.onPress = this.onPress.bind(this);
  }
  static navigationOptions = {
    title: 'Here salvage buyer meets seller...',
  };

  onPress() {
    const { navigate } = this.props.navigation;
    navigate('LetOutSpace2');
  }
  render() {
    const window = Dimensions.get('window');
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Image
            style={{ width: window.width , height: window.height - 20 }}
            source={require('../assets/Splashscreen3.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
});
