import React from 'react';
import { StyleSheet, Text, View,TextInput,
  Button,
  Icon,
  TouchableHighlight,
  ImageBackground } from 'react-native';
  import MapView,  { Marker, Callout } from 'react-native-maps';
// import {createStackNavigator} from 'react-navigation'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.markerId= undefined;
    this.state = {
      markers : [
        {
          latitude: 28.5244281,
          longitude: 77.1854559,
          title: "Chattarpur",
          uid: 1
        },
        {
          latitude: 28.5205459,
          longitude: 77.20156730000008,
          title: "Saket Metro Station",
          uid: 2
        }
      ],
      initialPosition: {coords: {
        latitude: 0,
        longitude: 0
      }},
      pinColor: ''
    };
  }

  // pressed(mId){
  //   console.log('Markeruid: '+ mId);
  // }

  fetchCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
          const iPosition = JSON.stringify(position);
          console.log(iPosition);

          this.setState({ initialPosition: position });
          // console.log(this.state);
       },
       (error) => alert(error.message),
       { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000 }
    );
  }

  componentDidMount(...args) {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            // const iPosition = JSON.stringify(position);
            // console.log(iPosition);
            this.setState({ initialPosition: position });
            // console.log(this.state);
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000 }
      );
   }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          showsUserLocation = {false}
          followUserLocation = {false}
          showsMyLocationButton={false}
          zoomEnabled = {true}
          region={{
            longitude: this.state.initialPosition.coords.longitude,
            latitude: this.state.initialPosition.coords.latitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        }}
        >
        {
          this.state.markers.map((marker, index) => {
            return (<MapView.Marker
              key={index}
              coordinate={{latitude : marker.latitude, longitude: marker.longitude}}
              title={marker.title + ' book now'}
              pinColor={this.state.pinColor}
           >
            <MapView.Callout tooltip style={styles.customView} onPress={() => console.log(marker.uid)}>
              <TouchableHighlight underlayColor='#dddddd'>
                <View style={styles.calloutText}>
                  <Text>{marker.title}{"\n"}{"Click here to book"}</Text>
                </View>
              </TouchableHighlight>
            </MapView.Callout>
           </MapView.Marker>);
          })
        }

        <MapView.Marker
          coordinate={{latitude: this.state.initialPosition.coords.latitude,
           longitude: this.state.initialPosition.coords.longitude}}
          pinColor={'purple'}
          title={'Current Location'}
        >
        </MapView.Marker>
        </MapView>

        <Button
          onPress={() => this.fetchCurrentLocation()}
          title="Current Location"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
      height: 600,
      marginTop: 80
   },
   customView: {
    backgroundColor: '#E6CAF1'
   },
   calloutText: {
    backgroundColor: '#E6CAF1'
   }
});
// const App = createStackNavigator({
//   Home: { screen: HomeScreen },
//   LetOutSpace2: {screen : LetOutSpace2}
// });

// export default App;
