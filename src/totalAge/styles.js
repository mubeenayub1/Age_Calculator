import React from "react";
import {StyleSheet} from "react-native";



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#dcf6fa"
    },
    icon:{
        margin:"5%",
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },
    maincomponents:{
        margin:"5%",
        padding:"5%",
        backgroundColor:"#277e8a",
        borderRadius:25,
        height:"40%"
        
    },
    textcomponents:{
        textAlign:"center",
        fontSize:32,
        fontWeight:"bold",
        marginTop:20,
        color:"white"
    },
    agecontainer:{
        backgroundColor:"white",
        width:"100%",
        height:'40%',
        marginTop:80,
        flexDirection:"column",
        borderColor:"#1d241e",
        borderWidth:3,
        borderRadius:25
      },
      ageNumber:{
        flexDirection:"row",
        justifyContent:"space-around"
      },
      inputNumber:{
        fontSize:22,
        alignItems:"center",
        justifyContent:"center"
      },
      extra:{
        margin:"5%",
        padding:"5%",
        backgroundColor:"#277e8a",
        borderRadius:25,
        height:"40%",
        paddingBottom:10,
    
     },
     text:{
         color:"black",
         fontSize:18,
         marginTop:5,
         fontWeight:"bold"
     },
     extratext:{
         color:"white",
         fontSize:28,
         marginLeft:10,
         marginTop:10,
         fontWeight:"bold",
     },
     extrainputtext:{
         color:"white",
         fontSize:18,
         marginTop:5,
         marginLeft:40,
         fontWeight:"bold"
     },
     inputtext:{
        color:"white",
        fontSize:18,
        marginTop:5,
        marginLeft:20,
        fontWeight:"bold",
    },
  });
  export default styles;