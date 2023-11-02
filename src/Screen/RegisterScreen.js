import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'

export default class RegisterScreen extends React.Component{
  state={
    email:"",
    password:"",
    errorMessage: null
  };
   handleLogin =()=>  {
const{email,password} = this.state
firebase.auth().singInWithEmailAndPassword(email,password).catch(error => this.state({errorMessage:error.message}))
  }
  render(){
    return(
      <View style={styles.container}>
           <Text  style={styles.greeting}> </Text>
      <View styles={styles.errorMessage}>
       {this.state.errorMessage && <Text style={style.error}> {this.state.errorMessage}</Text>}
    </View>
<View style={style.form}>
       <View>
        <Text style={styles.inputTitle}>Adresse Email</Text>
            <TextInput 
               style={styles.input} autoCapitalize="none" 
               onChangeText={email => this.state({email})}
               value={this.state.email}>
           </TextInput>
          </View>
        <View style={{marginTop:32}}>
          <Text style={styles.inputTitle}>Mot de Passe</Text>
          <TextInput 
          style={styles.input} 
          secureTextEntry autoCapitalize="none"
          onChangeText={password => this.state({password})}
          value={this.state.password}>
        </TextInput>
            </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={this.handleLogin}>

        <Text style={{ color:"#FFF", fontWeight:"500"}}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignSelf:"center", marginTop:32}}>  
        <Text style={{ color:"#414959", fontSize:13}}>New to BudgetApp?
          <Text style={{fontWeight:"500",color:"#"}}>S'inscrire</Text>
        </Text>
      </TouchableOpacity>
   </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    },
    greeting:{
      marginTop:32,
      fontSize:18,
      fontWeight:"400",
      textAlign:"center"
    },
    errorMessage:{
 height:72,
 alignItems:"center",
 justifyContent:"center",
 marginHorizontal:30
    },
    error:{
      color:"#E9446A",
      fontSize:13,
      fontWeight:"600",
      textAlign:"center"
    },
    form: {
      marginBottom:48,
      marginHorizontal:30
    },
    inputTitle:{
      color:"#8A8F9E",
      fontSize:10,
      textTransform:"uppercase"
    },
    input:{
      borderBottomColor:"#8A8F9E",
      borderBottomWidth:StyleSheet.hairlineWidt,
      height:40,
      fontSize:15,
      color:"#161F3D" 
    },
    button:{
      marginHorizontal:30,
      backgroundColor:"",
      borderRadius:4,
      height:52,
      alignItems:"center",
      justifyContent:"center",
    },
});




  


