import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Constants } from 'expo';
export default class FirstScreen extends Component {
  constructor() {
    super();
    this.state = {
      value: 'yes',
    };
    this.onPress = this.onPress.bind(this);
  }
  static navigationOptions = {
    title: 'Question 1',
  };

  onPress() {
    console.log('called');
    const { navigate } = this.props.navigation;
    navigate('SecondScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Do you need a digital diary?</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'black'}
          animation={true}
          onPress={value => {
            this.setState({ value: value });
          }}
        />
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
