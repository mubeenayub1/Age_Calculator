import { PROPERTY_TYPES } from "@babel/types";
import React from "react";
import {View,Text,TextInput, ScrollView} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import styles from "./styles";


const TotalAge=({navigation,route})=>{

    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.icon}>  
                <Icon
                    name="left"
                    type="antdesign"
                    color="#277e8a"
                    size={36}
                    onPress={()=>navigation.navigate("MainScreen")}
                />
                </View> 
            <View style={styles.maincomponents}>
                <View >
                <Text style={styles.textcomponents}>Total Age</Text>
                </View>
                <View style={styles.agecontainer}>
                    <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                        <Text style={styles.text}>DAYS</Text>
                        <Text style={styles.text}>MONTHS</Text>
                        <Text style={styles.text}>YEARS</Text>
                    </View>
                    <View style={styles.ageNumber}>
                        <TextInput style={styles.inputNumber} >{route.params.ageDays}</TextInput>
                        <TextInput style={styles.inputNumber} >{route.params.ageMonths}</TextInput>
                        <TextInput style={styles.inputNumber}>{route.params.ageYear}</TextInput>
                    </View>
                </View>
            </View>    
                <View style={styles.extra}>
                <Text style={styles.extratext}>EXTRA</Text>
                <View style={{flexDirection:"row",height:"80%",marginBottom:20}}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.extrainputtext}>Total Years:</Text>
                        <Text style={styles.extrainputtext}>Total Months:</Text>
                        <Text style={styles.extrainputtext}>Total Weeks:</Text>
                        <Text style={styles.extrainputtext}>Total Days:</Text>
                        <Text style={styles.extrainputtext}>Total Hours:</Text>
                        <Text style={styles.extrainputtext}>Total Minutes:</Text>
                        <Text style={styles.extrainputtext}>Total Seconds:</Text>
                    </View>
                    <View style={{height:"80%"}}>
                        <Text style={styles.inputtext}>{route.params.ageYear}</Text>
                        <Text style={styles.inputtext}>{route.params.totalMonth}</Text>
                        <Text style={styles.inputtext}>{route.params.totalWeek.toFixed()}</Text>
                        <Text style={styles.inputtext}>{route.params.totalDays}</Text>
                        <Text style={styles.inputtext}>{route.params.totalHours}</Text>
                        <Text style={styles.inputtext}>{route.params.totalMinutes}</Text>
                        <Text style={styles.inputtext}>{route.params.totalSeconds}</Text>
                        
                    </View>
                </View>
                </View> 
            </ScrollView> 
        </View>
    );
};
export default TotalAge;