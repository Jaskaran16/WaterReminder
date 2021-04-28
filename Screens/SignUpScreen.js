import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text, TextInput} from 'react-native'
import firebase from 'firebase'
import db from '../config'
export default class SignUpScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      confirmPassword:'',
    }
  }
  userSignUp = (emailId, password,confirmPassword) =>{
    if(password !== confirmPassword){
        return alert("Password doesn't match\nCheck your password.")
    }else{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then(()=>{
        db.collection('users').add({
          first_name:this.state.firstName,
          last_name:this.state.lastName,
          contact:this.state.contact,
          emailid:this.state.emailId,
          address:this.state.address
        })
        return alert(
             'User Added Successfully',
             '',
             [
               {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
             ]
         );
      })
      .catch((error)=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage)
      });
    }
  }
 
 userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
     this.props.navigation.navigate('HomeScreen')
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    })
  }
  render(){
    return(
      <View>
      <Text style = {styles.title}>Sign Up</Text>
      <TextInput
      style = {styles.formTextInput}
      placeholder = {"Email Address"}
       onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}/>
      <TextInput
      style = {styles.formTextInput}
      placeholder = {"Password"}
      onChangeText={(text)=>{
        this.setState({
          password: text
        })
      }}
      />
      <TextInput
      style = {styles.formTextInput}
      placeholder = {"Confirm Password"}
       onChangeText={(text)=>{
            this.setState({
              confirmPassword: text
            })
          }}/>
          
      <TouchableOpacity
      style = {styles.buttons}
      onPress={()=>
        this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
      }
      >
      <Text>Register</Text>
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
    fontSize:40,
    marginLeft:100,
    fontWeight:'300',
    // fontFamily:'AvenirNext-Heavy',
    color : '#ff9800'
  },
});