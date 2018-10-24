import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  CameraRoll,
  Image
} from 'react-native';
import { Constants } from 'expo';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json
import CardSell from './CardSell';
import Sold from './Sold';

export default class AppSell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelling: true,
      photos: null,
    };
  }
  onSellingClick = () => {
    this.setState({
      isSelling: true
    })
  };
  onSoldClick = () => {
    this.setState({
      isSelling: false
    })
  }
  accessCamera = () => {
    CameraRoll.getPhotos().then(r => this.setState({ photos: r.edges }));
  };
  render() {
    const data = [
      {
        image: '../assets/slider2.jpg',
        p_name: 'Jahaj',
        p_id: '1',
        p_price: '1,50,000',
        p_buyTime: '1915',
        views: '2071',
        likes: '14',
      },
      {
        image: '../assets/salvage-yard-banner.jpg',
        p_name: 'Gaadiyan',
        p_id: '2',
        p_price: '10,000',
        p_buyTime: '2000',
        views: '1203',
        likes: '5',
      },
    ];
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{
                width: '50%',
                height: 50,
                backgroundColor: 'rgb(47,109,164)',
              }}>
              <TouchableOpacity
                onPress={this.onPress}
                color="rgb(0,0,0,0)"
                style={
                  this.state.isSelling ? styles.selectedButton : styles.button
                }>
                <Text style={{ color: 'rgb(255,192,0)' }}>Selling</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '50%',
                height: 50,
                backgroundColor: 'rgb(47,109,164)',
              }}>
              <TouchableOpacity
                onPress={this.onPress}
                color="rgb(0,0,0,0)"
                style={
                  !this.state.isSelling ? styles.selectedButton : styles.button
                }>
                <Text style={{ color: 'rgb(255,192,0)' }}>Sold</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {this.state.isSelling ? <CardSell data={data} /> : <Sold data={data}/>} 
          </View>
          <View style={{ width: '100%', height: 50, position: 'absolute', left: 0, right: 0, bottom: 0 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{ width: '42%', backgroundColor: 'rgb(47,109,164)' }}>
                <TouchableOpacity
                  onPress={this.onPress}
                  color="rgb(0,0,0,0)"
                  style={styles.button}>
                  <Text style={{ color: 'rgb(255,192,0)' }}>My salvage</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: '16%' }}>
                <TouchableOpacity
                  onPress={this.accessCamera}
                  color="rgb(0,0,0,0)"
                  style={styles.camera}>
                  <Image
                    style={styles.logo}
                    source={require('../assets/camera.png')}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{ width: '42%', backgroundColor: 'rgb(47,109,164)' }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ImagePickerComp')}
                  color="rgb(0,0,0,0)"
                  style={styles.button}>
                  <Text style={{ color: 'rgb(255,192,0)' }}>Gallery</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
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
  button: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'transparent',
  },
  selectedButton: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: '100%',
    borderColor: '#191970',
    borderBottomWidth: 2,
  },
  camera: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logo: {
    height: 70,
    width: 70,
    backgroundColor: '#c65c5c',
  },
});
