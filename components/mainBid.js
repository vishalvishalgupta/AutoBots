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
import Table from 'react-native-simple-table'
 import { Constants } from 'expo';
 import { Card, ListItem, Button, Icon } from 'react-native-elements';
 import { sliderItemWidth,sliderWidth, sliderItemHorizontalMargin, slideWidth } from '../assets/style';
 import Carousel from 'react-native-snap-carousel';
 import { Col, Row, Grid } from "react-native-easy-grid";

 var comgls = [{
    title: 'QUANTITY',
    dataIndex: 'QUANTITY'
  },
  {
    title: 'BRC_DESC',
    dataIndex: 'BRC_DESC'
  }];


var dataSource = [];
      dataSource.push(
        {
          QUANTITY: 208000.0,
          BRC_DESC: 'TEA',
          PC_CODE: 'A1',
          COUNTRY_NAME: 'AFGHANISTAN',
          'VALUE (USD)': 563225.0
        },
        {
          QUANTITY: 62250.0,
          BRC_DESC: 'TEA',
          PC_CODE: 'A1',
          COUNTRY_NAME: 'ALBANIA',
          'VALUE (USD)': 231262.0
        },
        {
          QUANTITY: 114000.0,
          BRC_DESC: 'COFFEE',
          PC_CODE: 'A2',
          COUNTRY_NAME: 'ALBANIA',
          'VALUE (USD)': 221499.0
        },
        {
          QUANTITY: 60.0,
          BRC_DESC: 'IRON AND STEEL',
          PC_CODE: 'L3',
          COUNTRY_NAME: 'AFGHANISTAN',
          'VALUE (USD)': 60797.0
        }
      );
export default class mainBid extends Component {
  constructor(props) {
    super(props);
    this.state = {  data: [
      {
        title: '../assets/Splashscreen3.png'
      },
      {
        title: '2'
      },
      {
        title: '3'
      },
      {
        title: '4'
      },
    ],
      otp1: '', otp2: '', otp3: '', otp4: '', otp5: '' ,  message: '',
      promptVisible: false,
      bid:null
      };

        this.getValueOnChange = this.getValueOnChange.bind(this);
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

  renderListComponent = ({ item }) => (
    <Card image={require('../assets/Splashscreen3.png')} />
  );

  getValueOnChange(key, val){
    this.setState({ [key]: val})
  }

  render() {
     const window = Dimensions.get('window');
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.ImgView}>
           <Carousel
          data={this.state.data}
          renderItem={this.renderListComponent}
          sliderWidth={sliderWidth}
          itemWidth={sliderItemWidth + 140}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Current Bid $1234</Text>
            </View>
             <TextInput  placeholder="Place your bid" style={styles.text3} keyboardType="numeric" onChangeText={val => this.getValueOnChange('bid', val)}></TextInput>
             <TouchableOpacity
                   onPress={() => 
                   {
                     if(parseInt(this.state.bid) >= 1234){
                       alert("Thanks for posting your bid. Salvage will be yours if auction ends with your bid as highest.");
                     }else{
                         alert("Place your bid higher than the current bid");
                     }
                   }
                   }
              >
             <Text style={styles.text}>Submit Bid</Text>
             </TouchableOpacity>
               <Text style={styles.paragraph}>  Item Specifications </Text>
        </View>
         <View>
        <Table height={200} columnWidth={window.width-200} columns={comgls} dataSource={dataSource} />
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
    margin: 14,
    paddingHorizontal: 70,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  text: {
    borderWidth: 2,
    padding: 5,
    fontWeight: 'bold',
    height:40,
    width:200,
    fontSize: 18,
    margin:3,
    textAlign: 'center',
    color: '#5475a8',
    borderColor: 'grey',
    backgroundColor: '#e7e7e7',
  },
   text3: {
    padding: 5,
    height:40,
    width:200,
    fontSize: 18,
    textAlign: 'center',
    color: '#5475a8',
    borderColor: 'grey',
    backgroundColor: '#e7e7e7',
  },
  ImgView:{
    alignItems: 'center',
    height:400,
  }
});
