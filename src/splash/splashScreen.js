import { NavigationContainer } from "@react-navigation/native";
import React,{useEffect} from "react";
import { View,Text,Image } from 'react-native';

import styles from "./styles";

const splashScreen =({navigation})=>{
    useEffect(()=>{
         setTimeout(()=>{navigation.navigate("MainScreen")},2000);
    })
    return(
        <View style={styles.container}>
            <Image source={require("../../assets/image.jpg")} style={styles.image}></Image>
            <Text style={styles.textContainer}>
                AGE CALCULATOR
            </Text>
        </View>
    );
};
export default splashScreen;