import moment from "moment";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./styles";


const MainScreen = ({navigation})=>{
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [toDayDate, setTodayDate] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [typeDate, setTypeDate] = useState('');

  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    const handleConfirm = (date) => {
        typeDate==="Today" ? setTodayDate(moment(date).format('DD  -  MM  -  YYYY')):setDateOfBirth(moment(date).format('DD  -  MM  -  YYYY'))
        hideDatePicker();
        console.log(date)
      };
    
    
      
      const calculateAge = () => {
        if(toDayDate === "" || dateOfBirth === "")
        {
            alert("Please Select date")
        }
        else{
          let temp = toDayDate.split("-")
          let birthtemp = dateOfBirth.split("-")
          let ageDays= parseInt(temp[0].trim())-parseInt(birthtemp[0].trim())
          let ageMonths=parseInt(temp[1].trim())-parseInt(birthtemp[1].trim())
          let firstmonth= temp[1];
          let secondMonth=birthtemp[1];
          let ageYear= parseInt(temp[2].trim())-parseInt(birthtemp[2].trim())
         if(firstmonth>=secondMonth)
          {
            ageMonths;
          }
          else{
              ageYear--;
              ageMonths +=12;
             }
        let firstDay= temp[0];
        let secondDay=birthtemp[0];
          if(firstDay>=secondDay){
            ageDays;
          }
          else{
              ageMonths--;
              ageDays +=31;
          }
          let totalMonth=ageYear*12 + ageMonths;
        
          let totalDays = ageYear*365  + ageMonths*30 +ageDays;
          let totalWeek= totalDays/7;
          let totalHours = totalDays*24;
          let totalMinutes = totalHours*60;
          let totalSeconds = totalMinutes*60;
          navigation.navigate('TotalAge',{ageYear:ageYear,ageMonths:ageMonths,ageDays:ageDays,totalMonth:totalMonth,totalWeek:totalWeek, totalDays:totalDays,totalHours:totalHours, totalMinutes:totalMinutes, totalSeconds:totalSeconds})
          // return [ageYear,ageMonths,ageDays]
       } 
    };
  return(
    <View style={styles.maincontainer}>
        <ScrollView>
            <Text style={styles.headertext}>Age Calculator</Text>
        <View style={styles.topcontainer}>
            <Text style={styles.toptext}>Date Of Today</Text>
             <View style={styles.container}>
                <TextInput style={styles.input} 
                    placeholder="DD -  MM - YYYY" 
                    keyboardType="numeric" value={toDayDate}
                    onChangeText={(val)=>{setTodayDate(val) }}
                />
                    <Icon
                        name="calendar"
                        type="antdesign"
                        color="black"
                        onPress={()=>{showDatePicker(),setTypeDate("Today")}}
                    />
        
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
        </View>
        <View style={styles.midcontainer} >
            <Text style={styles.midtext}>Date Of Birth</Text>
            <View style={styles.midtermcontainer}>
                <TextInput style={styles.input} 
                     placeholder="DD -  MM - YYYY"   
                     keyboardType="numeric"
                     onChangeText={(val)=>{setDateOfBirth(val) }}
                     value={dateOfBirth}
                />
                    <Icon
                        name="calendar"
                        type="antdesign"
                        color="black"
                        onPress={()=>{showDatePicker(),setTypeDate("BirthDate")}}

                        
                    />
            </View>
        </View>
        <View style={styles.button}>
                <TouchableOpacity style={styles.midinputcontainer} onPress={()=>{calculateAge()}}>
                    <Text style={styles.calbutton}>CALCULATE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.midinputcontainer} onPress={()=>{setDateOfBirth()}}>
                    <Text style={styles.calbutton2}>CLEAR</Text>
                </TouchableOpacity>
        </View>
       
        </ScrollView>
    </View>
  );
};
export default MainScreen;