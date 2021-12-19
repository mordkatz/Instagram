import { StatusBar } from 'expo-status-bar';
import React from 'react';
// To add firebase
import * as firebase from 'firebase'
// To add navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSnkvCX6F_Ol-jMdRptAOm1id06q0yL6w",
  authDomain: "instagram-dev-7a6c1.firebaseapp.com",
  projectId: "instagram-dev-7a6c1",
  storageBucket: "instagram-dev-7a6c1.appspot.com",
  messagingSenderId: "218214828493",
  appId: "1:218214828493:web:d4e1c27ebe0f7249df1c84",
  measurementId: "G-H7M9Y7Z1MS"
};

if(firebase.apps.length === 0){
  firebase.intitializeApp(firebaseConfig)
}

// Will contain our screens and routs / tag for every rout
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name = "Landing" component={LandingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name = "Register" component={RegisterScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
