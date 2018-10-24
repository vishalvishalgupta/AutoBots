import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,Button,ScrollView,Picker } from 'react-native';
import { Constants } from 'expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class RegisterCategory extends Component {

  constructor(props) {
        super(props);
        this.state = {
      name:"",
      numberOfYears : "",
      orgPrice : "",
      deprecationRate:"",
      dimension:"",
      sub_cat : ""
        };

        this.getValueOnChange = this.getValueOnChange.bind(this);
    this.getValue = this.getValue.bind(this);
    }


  getValueOnChange(key, val){
    this.setState({ [key]: val})
  }
 
  getValue(){
    this.props.navigation.navigate('BidAmount')
  }
  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.paragraph}>
           Provide information as a salvage
        </Text>
              
              <ScrollView>
              <Text style={styles.SubCtegory}>Choose Sub-Category</Text> 
              <Picker
                selectedValue={this.state.sub_cat}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) => this.setState({ sub_cat: itemValue })}>
                <Picker.Item label="category 1" value="category 1" />
                <Picker.Item label="category 2" value="category 2" />
                <Picker.Item label="category 3" value="category 3" />
              </Picker>
              <Text style={styles.buttonText}>Specification</Text> 
              <TextInput  style={styles.inputBox} placeholder="Name" keyboardType="name" onChangeText={val => this.getValueOnChange('name', val)}/>          
              <TextInput  style={styles.inputBox} placeholder="Number of years" keyboardType="numeric" onChangeText={val => this.getValueOnChange('numberOfYears', val)}/> 
              <TextInput  style={styles.inputBox} placeholder="Original Price" keyboardType="numeric" onChangeText={val => this.getValueOnChange('orgPrice', val)}/>
              <TextInput  style={styles.inputBox} placeholder="deprecation rate" keyboardType="numeric" onChangeText={val => this.getValueOnChange('deprecationRate', val)}/>
              <TextInput  style={styles.inputBox} placeholder="Dimension..." keyboardType="numeric" onChangeText={val => this.getValueOnChange('dimension', val)}/>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('BidAmount')} >
              <Button
               onPress={this.getValue}
                title="NEXT"
                color="#045cea"
                accessibilityLabel="Learn more about this purple button"
                />
                    </TouchableOpacity>
          </ScrollView>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
 inputBox: {
    height:40,
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#34495e',
    marginVertical: 10
  },
  SubCtegory:{

  }
});