import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
 import { Constants } from 'expo';

export default class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = { otp1: '', otp2: '', otp3: '', otp4: '', otp5: '' };
  }

  handleChangeText = (index, replacement) => {
    const inputs = [this.i1, this.i2, this.i3, this.i4, this.i5];
    if (index < nBoxes - 1 && replacement) inputs[index + 1].focus();
    else if (
      index == nBoxes - 1 &&
      this.state.otp2 &&
      this.state.otp3 &&
      this.state.otp4 &&
      replacement
    )
      Keyboard.dismiss();
    console.log('text changed', this.state, replacement);
  };

  handleKeyPress = (index, e) => {
    const inputs = [this.i1, this.i2, this.i3, this.i4, this.i5];
    if (e.nativeEvent.key == 'Backspace' && index > 0) {
      var backFocus = true;
      if (index == 1) this.setState({ otp1: '' });
      else if (index == 2) this.setState({ otp2: '' });
      else if (index == 3) this.setState({ otp3: '' });
      else if (index == 4) {
        if (this.state.otp5 != '') backFocus = false;
        else this.setState({ otp4: '' });
      }
      if (backFocus) inputs[index - 1].focus();
      console.log('key pressed Backspace');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.ImgView}>
          <Image
              style={{ width: 250, height: 150, paddingTop: -35, marginTop: 35 }}
              source={require('../assets/Splashscreen4.png')}
            />
          <Text style={styles.paragraph}>Please enter your pin here</Text>
        </View>
        <View
          style={{ flexDirection: 'row', marginHorizontal: interbox * 0.75 }}>
          <TextInput
            style={[styles.charBox, this.state.otp1 && styles.charBoxEnabled]}
            maxLength={1}
            autoCapitalize="characters"
            value={this.state.otp1}
            underlineColorAndroid="transparent"
            selectionColor="#27364D"
            ref={c => (this.i1 = c)}
            onKeyPress={event => {
              this.handleKeyPress(0, event);
            }}
            onChangeText={n => {
              this.setState({ otp1: n });
              this.handleChangeText(0, n);
            }}
          />
          <TextInput
            style={[styles.charBox, this.state.otp2 && styles.charBoxEnabled]}
            maxLength={1}
            autoCapitalize="characters"
            value={this.state.otp2}
            underlineColorAndroid="transparent"
            selectionColor="#27364D"
            ref={c => (this.i2 = c)}
            onKeyPress={event => {
              this.handleKeyPress(1, event);
            }}
            onChangeText={n => {
              this.setState({ otp2: n });
              this.handleChangeText(1, n);
            }}
          />
          <TextInput
            style={[styles.charBox, this.state.otp3 && styles.charBoxEnabled]}
            maxLength={1}
            autoCapitalize="characters"
            value={this.state.otp3}
            underlineColorAndroid="transparent"
            selectionColor="#27364D"
            ref={c => (this.i3 = c)}
            onKeyPress={event => {
              this.handleKeyPress(2, event);
            }}
            onChangeText={n => {
              this.setState({ otp3: n });
              this.handleChangeText(2, n);
            }}
          />
          <TextInput
            style={[styles.charBox, this.state.otp4 && styles.charBoxEnabled]}
            maxLength={1}
            autoCapitalize="characters"
            value={this.state.otp4}
            underlineColorAndroid="transparent"
            selectionColor="#27364D"
            ref={c => (this.i4 = c)}
            onKeyPress={event => {
              this.handleKeyPress(3, event);
            }}
            onChangeText={n => {
              this.setState({ otp4: n });
              this.handleChangeText(3, n);
            }}
          />
          <TextInput
            style={[styles.charBox, this.state.otp5 && styles.charBoxEnabled]}
            maxLength={1}
            autoCapitalize="characters"
            value={this.state.otp5}
            underlineColorAndroid="transparent"
            selectionColor="#27364D"
            ref={c => (this.i5 = c)}
            onKeyPress={event => {
              this.handleKeyPress(4, event);
            }}
            onChangeText={n => {
              this.setState({ otp5: n });
              this.handleChangeText(4, n);
            }}
          />
           </View>
           <View style={styles.view1}>
             <Text style={styles.paragraph}>RESEND OTP</Text>
          <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Category')}
              style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            </View>
      </KeyboardAvoidingView>
    );
  }
}

const Dimensions = require('Dimensions');
let deviceWidth = Dimensions.get('window').width;
const ratioBoxInterBox = 4.25;
const nBoxes = 5;
let interbox = deviceWidth / (nBoxes + 1 + nBoxes * ratioBoxInterBox);
let intraBoxPadding = interbox * 0.5;
let boxFontSize = interbox / 0.75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  paragraph: {
    margin: 24,
    paddingHorizontal: 70,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
   buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  ImgView:{
    alignItems: 'center',
  },
   button: {
    backgroundColor: '#2F6DA4',
    height: 45,
    width: 180,
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff',
    paddingVertical: 12,
    borderColor: 'grey',
    borderWidth: 2,
  },
  view1:{
    paddingHorizontal:70,
   backgroundColor: 'white',
    alignItems: 'center',
  },
  charBox: {
    borderColor: '#e7e7e7',
    backgroundColor: '#e7e7e7',
    borderRadius: interbox / 4,
    paddingVertical: intraBoxPadding,
    marginHorizontal: interbox / 2,
    fontSize: boxFontSize,
    textAlign: 'center',
    flex: 1,
  },
  charBoxEnabled: {
    elevation: 2,
    backgroundColor: 'white',
    borderWidth: 0.5,
    marginTop: -2,
  },
});
