import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants, Fingerprint } from 'expo';

export default class TenthScreen extends Component {
state = {
authenticated: false,
canAuthenticate: false
}
async componentWillMount() {
const hasHardware = await Fingerprint.hasHardwareAsync();
if(hasHardware) {
const isEnrolled = await Fingerprint.isEnrolledAsync();
if(isEnrolled) {
this.setState({canAuthenticate: true});
}
}
}
isAuth = async () => {
this.setState({authenticated: false});
if(this.state.canAuthenticate) {
const result = await Fingerprint.authenticateAsync('Authenticate yourself Hooman!');
if(result.success) {
this.setState({authenticated: true});
this.props.navigation.navigate('OTP')
}
}
}
render() {
const authStr = this.state.authenticated ? 'User is authenticated' : 'User is NOT Authenticated';
return (
<View style={styles.container}>
<View style={[styles.wrapper, this.state.authenticated && styles.auth]}>
<Text style={styles.paragraph}>
{ authStr }
</Text>
</View>
{
this.state.canAuthenticate ?
<Button onPress={this.isAuth} title={'Authenticate'} /> :
<Text>No Hardware / Enrolled Fingerprints</Text>
}
</View>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
paddingTop: Constants.statusBarHeight,
backgroundColor: '#ecf0f1',
},
paragraph: {
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
color: '#fff',
},
wrapper: {
backgroundColor: '#0ad',
padding: 20,
borderRadius: 5,
marginBottom: 30,
},
auth: {
backgroundColor: 'green'
}
});