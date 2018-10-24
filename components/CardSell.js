import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
var ImagesArray = [
  '../assets/slider2.jpg',
  '../assets/salvage-yard-banner.jpg',
];
export default class CardSell extends React.Component {
  constructor() {
    super();
  }
  renderCurrentAds = () => {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {this.props.data.map((data, index) => {
          console.log(ImagesArray[index]);
          return (
            <View style={styles.container}>
              <ImageBackground
                style={styles.logo}
                source={require('../assets/slider2.jpg')}>
                <View style={{backgroundColor: 'rgba(237,237,237,0.5)', position: 'absolute', left: 0, right: 0, bottom: 0}}>
                  <Text>{data.p_name}</Text>
                  <Text>${data.p_price}</Text>
                  <Button title = "Mark As Sold" color="rgb(47,109,164)"/>
                </View>
              </ImageBackground>
            </View>
          );
        })}
      </View>
    );
  };

  render() {
    return <View>{this.renderCurrentAds()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '44%',
    height: 200,
    marginTop: 60,
    // backgroundColor : '#D3D3D3',
    marginLeft: '3%',
    marginRight: '3%',
  },
  // paragraph: {
  //   margin: 24,
  //   marginTop: 0,
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   color: '#34495e',
  // },
  logo: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
});
