import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text} from 'react-native'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from './Screens/LoginScreen'
import SignUpScreen from './Screens/SignUpScreen'
import HomeScreen from './Screens/HomeScreen'
export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}
var AppNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  SignUpScreen:SignUpScreen,
  HomeScreen:HomeScreen,
})
const AppContainer = createAppContainer(AppNavigator)