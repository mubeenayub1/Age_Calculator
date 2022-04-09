import React from "react";
import { StyleSheet, View,Text } from "react-native";
import MainScreen from "./src/mainscreen/mainScreen";
import TotalAge from "./src/totalAge/totalage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splashScreen from "./src/splash/splashScreen";


const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={splashScreen} options={{headerShown:false}}/>
       <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}}/>
        <Stack.Screen name="TotalAge" component={TotalAge} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};


export default App;

