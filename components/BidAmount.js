import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import { Constants } from 'expo';

export default class BidAmount extends Component {
  constructor(props) {  
        super(props);

        this.postYourAd = this.postYourAd.bind(this);
    }

  postYourAd(){

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Enter the minimum bid amount</Text>

        <TextInput
          style={styles.inputBox}
          placeholder="Minimum bid amount( Eg:- $1299)"
          keyboardType="name"
        />

        <Text style={styles.paragraph}>Recomended amount</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Recomended price"
          keyboardType="name"
        />
         <TouchableOpacity >
              <Button
                onPress={this.postYourAd}
                title="Post Your Salvage"
                color="#045cea"
                accessibilityLabel="Learn more about this purple button"
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
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#045cea',
  },
  inputBox: {
    height: 40,
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#34495e',
    marginVertical: 10,
  },
});