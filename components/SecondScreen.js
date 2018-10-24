// import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';
// import { Constants } from 'expo';
//
// import RadioForm, {
//   RadioButton,
//   RadioButtonInput,
//   RadioButtonLabel,
// } from 'react-native-simple-radio-button';
//
// export default class SecondScreen extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: 'yes',
//     };
//     this.onPress = this.onPress.bind(this);
//   }
//   static navigationOptions = {
//     title: 'Question 2',
//   };
//
//   onPress() {
//     console.log('called');
//     const { navigate } = this.props.navigation;
//     navigate('ThirdScreen');
//   }
//
//   render() {
//     var radio_props = [
//       { label: 'Yes', value: 'yes' },
//       { label: 'No', value: 'no' },
//     ];
//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>Do you need a social network for better client reach?</Text>
//         <RadioForm
//           radio_props={radio_props}
//           initial={0}
//           formHorizontal={true}
//           labelHorizontal={true}
//           buttonColor={'black'}
//           animation={true}
//           onPress={value => {
//             this.setState({ value: value });
//           }}
//         />
//         <TouchableOpacity style={styles.button} onPress={this.onPress}>
//           <Text>Next</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     // justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#26b67c',
//   },
//   paragraph: {
//     fontSize: 18,
//   },
//   button: {
//     marginTop: 35,
//     backgroundColor: 'green',
//     paddingLeft: 20,
//     paddingRight: 20,
//     paddingTop: 10,
//     paddingBottom: 10,
//     borderRadius: 4,
//   },
// });
