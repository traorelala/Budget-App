import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component{
  state = {
    email:"",
    displayName:""
  }
  componentDidMount(){
    const{
      email,displayName}= firebase.auth().currentUser;
this.setState({email,displayName});
  }
  DeconnexionUser=() =>{
    firebase.auth().Deconnexion();
  }
  render(){
    return(
      <View style={styles.container}>
      <Text >Home Screen</Text>
      <TouchableOpacity styl={{marginTop:32}} onPress={thisdeconnexionUser}> </TouchableOpacity>
    </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
});