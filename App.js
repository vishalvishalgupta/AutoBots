import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
// You can import from local files
import HomeScreen from './components/HomeScreen';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import LetOutSpace2 from './components/LetOutSpace2';
import FourthScreen from './components/FourthScreen';
import FormPage1 from './components/FormPage1';
import FormPageOne from './components/FormPageOne';
import Login from './components/Login';
import AfterLogin from './components/AfterLogin';
// import Bots from './components/Bots';
import OTP from './components/OTP';
import Category from './components/Category';
// import flatOne from './components/flatOne';
// import ListItem from './components/ListItem';
// import Timer from './components/Timer';
import mainBid from './components/mainBid';
 import AppSell from './components/AppSell';
 import CardSell from './components/CardSell';
 import Sold from './components/Sold';
 import ImagePickerComp from './components/ImagePickerComp';
 import CategoryBrowsingScreen from './components/CategoryBrowsingScreen';
// import Sellercategory from './components/Sellercategory';
 import RegisterCategory from './components/RegisterCategory';
// import BioMateric from './components/BioMateric';
// import ListFlatList from './components/ListFlatList';
 import BidAmount from './components/BidAmount';
 import SavageList from './components/SavageList';
// import SeventhScreen from './components/SeventhScreen';
// import EighthScreen from './components/EighthScreen';
//  import NinthScreen from './components/NinthScreen';
// import TenthScreen from './components/TenthScreen';
// import ThankYou from './components/ThankYou';

// or any pure javascript modules available in npm

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  LetOutSpace2: { screen: LetOutSpace2 },
  FourthScreen: { screen: FourthScreen },
  FormPage1: { screen: FormPage1 },
  FormPageOne: { screen: FormPageOne },
  Login: { screen: Login },
  AfterLogin: { screen: AfterLogin },
  // Bots:{screen:Bots},
  OTP:{screen:OTP},
  Category:{screen:Category},
  // flatOne:{screen:flatOne},
  // ListItem:{screen:ListItem},
  // Timer:{screen:Timer},
   mainBid:{screen:mainBid},
   AppSell:{screen:AppSell},
   CardSell:{screen:CardSell},
   Sold:{screen:Sold},
   ImagePickerComp:{screen:ImagePickerComp},
   CategoryBrowsingScreen:{screen:CategoryBrowsingScreen},
  // Sellercategory:{screen:Sellercategory},
   RegisterCategory:{screen:RegisterCategory},
  // BioMateric:{screen:BioMateric},
  // ListFlatList:{screen:ListFlatList},
   BidAmount:{screen:BidAmount},
   SavageList:{screen:SavageList}
});

export default App;
