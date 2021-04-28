import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text,TextInput,Image} from 'react-native'
export default class HomeScreen extends Component{
  add250ml=()
  render(){
    return(
      <View>
      <Text style={styles.title}>Water Reminder App</Text>
      <TouchableOpacity>
      <Image source = {require("../assets/plus-sign_318-53038.jpg")}style ={{width:25,height:25, marginLeft:280,marginTop:200}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source = {require("../assets/Minus.png")}style ={{width:25,height:25, marginLeft:15,marginTop:-20}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source = {require("../assets/Water.jpg")}style ={{width:150,height:150,marginTop: -140, marginLeft:90}}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>+250 ml</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>-250 ml</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    marginLeft:70,
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
   formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
      title :{
    fontSize:30,
    marginLeft:40,
    fontWeight:'300',
    // fontFamily:'AvenirNext-Heavy',
    color : "blue"
  },
});