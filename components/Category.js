/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import all the components we will need

export default class Category extends Component {

  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }

  

  componentDidMount() {
    var that = this;
    var a,b;
    let items = Array.apply(null, Array(6)).map((v, i) => {
      if(i+1 === 1)
      {
        a="Machinery/Hardware";
        b=require('../assets/machine.png')
      }
      if(i+1 === 2)
      {
        a="Home Appliance";
        b=require('../assets/home.png')        
      }
      if(i+1 === 3)
      {
        a="Auto/Transports"
        b=require('../assets/car.png')        
      }
      if(i+1 === 4)
      {
        a="Constructions/Real Estate"
        b=require('../assets/construction.png')        
      }
      if(i+1 === 5)
      {
        a="Furniture"
        b=require('../assets/furniture.png')        
      }
      if(i+1 === 6)
      {
        a="Plastics & Polymers"
        b=require('../assets/plastic.png')        
      }
      return { id: i, src:  (a), b : b };
    });
    that.setState({
      //Setting the data source
      dataSource: items
    });
  } 

  static navigationOptions = {
    title: 'Choose a catagory',
  };
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.MainContainer}>
      <View style={styles.ImgView}>
          <Image
            style={{ width: 250, height: 150, marginHorizontal:55}}
            source={require('../assets/Splashscreen4.png')}
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row', margin: 10,fontSize: 80, fontWeight: 'bold' }}>
            <View style = {{ alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SavageList')}>
                <Text style={styles.imageThumbnail} >
                <Image
                  style={{ width: 120, height: 100, padding: 10}}
                  source={item.b}
                />
              {item.src}
              </Text>
              </TouchableOpacity>
              </View>
            </View>
         
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
   ImgView:{
    alignItems: 'center',
    justifyContent:'center'
  },
  container: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
});


