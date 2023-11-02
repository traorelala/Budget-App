import {createAppContainer, createSwitchNavigator } from 'react-navigation'
import {creatStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './src/Screen/LoadingScreen'
import LoginScreen from './src/Screen/LoginScreen'
import RegisterScreen from './src/Screen/LoadingScreen'
import HomeScreen from './src/Screen/HomeScreen'
import ProfileScreen from './src/Screen/ProfileScreen'
import AddScreen from './src/Screen/AddScreen'
import TransactionScreen from './src/Screen/TransactionScreen'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD4aCo1NXZPq1wJc-_KYANC_2_EyqADJSU",
  authDomain: "myapp-ee9f5.firebaseapp.com",
  projectId: "myapp-ee9f5",
  storageBucket: "myapp-ee9f5.appspot.com",
  messagingSenderId: "246469458166",
  appId: "1:246469458166:web:7c751b40c360d0da0394d7"
};

firebase.initializeApp(firebaseConfig);
const AppStack=creatStackNavigator({
  Home:HomeScreen
})
const AuthStack=creatStackNavigator({
  Login:LoginScreen,
  Register:RegisterScreen
})
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading:LoadingScreen,
      App:AppStack,
      Auth:AuthStack
    },
    {
      initialRouteName:"Loading"
    }
  )
);


