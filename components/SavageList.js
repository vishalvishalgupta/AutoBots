

import React, { Component } from 'react';
import {
  View,
  Platform,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native';
import masterData from './masterData.json';
import TimerCountdown from 'react-native-timer-countdown';

export default class SavageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: masterData[0]['category_1']
  }
  }
  tabCLickHandler(category) {
    this.setState({
      list: masterData[0][category],
    });
  }

   componentDidMount(){
    this.setState({
      list: masterData[0]['category_1']
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.category}>
          <View style = {{'width': 120}}>
            <Button
              title="category 1"
              index="1"
              onPress={this.tabCLickHandler.bind(this, 'category_1')
              }
            />
          </View>
          <View style = {{'width': 120}}>
            <Button
              title="category 2"
              index="2"
              onPress={this.tabCLickHandler.bind(this, 'category_2')}
            />
          </View>
          <View style = {{'width': 120}}>
            <Button
              title="category 3"
              index="3"
              onPress={this.tabCLickHandler.bind(this, 'category_3')}
            />
          </View>
        </View>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => (
            <View style={styles.item} >
           <TouchableOpacity
              onPressIn={() => this.props.navigation.navigate('mainBid')}>
              <Image
                source={{ uri: item.img }}
                style={styles.image}
              />
              <View style={{ 'paddingLeft': 15 }} >
                <Text numberOfLines={1} style={styles.comapnyName}> {item.comapnyName}</Text>
                <Text numberOfLines={1} style={styles.desc}>{item.desc}</Text>
                <Text numberOfLines={1} style={styles.desc}>{"Current Bid-"}{item.currentBid}</Text>
                <Text numberOfLines={1} style={styles.desc}>{"minimum Bid-"}{item.previousBid}</Text>
                <Text numberOfLines={1} style={styles.CountDown} >
                  <TimerCountdown
                    initialSecondsRemaining={1000 * 60 * 60 * item.timeLeft}
                    allowFontScaling={true}
                    style={{ fontSize: 18 }}
                  />
                </Text>
              </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  	item:{
    paddingTop:5,
    paddingBottom:5,
		height:200,
		marginLeft:10,
		marginRight:10,
		borderBottomWidth:1,
		borderColor:'#CCCCCC',
		flex:1,
		flexDirection:'row'
	},
	image:{
		width:110,
		height:120,
		marginTop:10,
		borderRadius:20
	},
	desc:{
		flex:1,
		justifyContent:'flex-start',
		marginLeft:0,
    flexDirection:'row'
	},
	comapnyName:{
		fontSize:15,
		fontWeight:'bold'
	},
  CountDown :{
    flexDirection:'column',
    marginTop : 3
  },
  container: {
    flex: 1,
    marginTop: 25,
  },
  category: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
