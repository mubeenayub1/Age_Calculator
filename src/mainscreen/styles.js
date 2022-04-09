import React from "react";
import {StyleSheet} from "react-native";



const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:"#dcf6fa"
    },
    headertext:{
        color:"#277e8a",
        fontFamily:"bold",
        fontSize:24,
        marginTop:10,
        marginLeft:30
    },
    topcontainer:{
        flex:0.4,
        marginTop:20,
        paddingVertical:"15%",
        margin:"5%",
        borderRadius:25,
        borderRightColor:"white",
        backgroundColor:"#277e8a",
        
    },
    toptext:{
        color:"white",
        textAlign:"center",
        fontSize:32,
        fontWeight:"bold",
        paddingBottom:"5%"
        
    },
    container:{
        marginHorizontal:10,
        backgroundColor:'white',
        marginTop:30,
        height:60,
        borderRadius:25,
        flexDirection:"row",
        borderWidth:3,
        borderColor:"#1d241e",
        alignItems:"center"
    },
    input:{
        fontSize:22,
        marginHorizontal:30,
        color:"black"
    },
    midcontainer:{
        backgroundColor:"#277e8a",
        margin:"5%",
        borderRadius:25,
        paddingVertical:"15%"
    },
    midtext:{
        color:"white",
        textAlign:"center",
        fontSize:32,
        fontWeight:"bold",
        paddingBottom:"5%"
        
    },
    midtermcontainer:{
        marginHorizontal:10,
        backgroundColor:"white",
        marginTop:30,
        height:60,
        borderRadius:25,
        flexDirection:"row",
        borderWidth:3,
        borderColor:"#1d241e",alignItems:'center'
    },
    midinputcontainer:{
        backgroundColor:"#277e8a",
        marginTop:25,
        height:50,
        width:150,
        borderRadius:15,
        flexDirection:"row",
             
    },
    calbutton:{
        color:"white",
        fontSize:20,
        marginLeft:15,
        marginTop:10,
        fontWeight:"bold"    
    },
    calbutton2:{
        color:"white",
        fontSize:20,
        marginLeft:40,
        marginTop:10,
        fontWeight:"bold"
     
    },
    
    button:{
        marginVertical:5,
        flexDirection:"row",
        marginHorizontal:5,
        justifyContent:"space-between",
        paddingHorizontal:"5%"
    },
    midbutton:{
        flexDirection:"row",
        marginHorizontal:12,
        justifyContent:"space-between"
    },
    
  });
  export default styles;