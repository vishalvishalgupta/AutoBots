import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { Constants } from 'expo';
import { KeyboardAvoidingView } from 'react-native';
export default class ChargesScreen extends Component {
  constructor() {
    super();
    this.state = {
      value: 'yes',
    };
    this.onPress = this.onPress.bind(this);
  }

  static navigationOptions = {
    title: "Parking Location"
  };

  onPress() {
    const { navigate } = this.props.navigation;
    navigate('LetOutSpace2');
  }
  render() {
    const window = Dimensions.get('window');
    const { navigate } = this.props.navigation;
    {console.log(this.props.navigation.state.params.name);}
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
             <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 18}}>{this.props.navigation.state.params.name}</Text>
          <Image
            style={{ width: window.width, height: window.height}}
            source={require('../assets/Picture1.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    flexDirection: 'column'
  },
});