import React from 'react'
import {View, Text, Image, ImageBackground,StyleSheet} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';


const AboutUsScreen = ({ navigation }) => {


    
    return(
        <View style={{
            backgroundColor:"gainsboro",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#092B9C",
               height:"28%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20,
               alignItems:'center',
            

           }}>
            
               <View 
             
             style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:65,
                //    marginLeft:125,
                   width:"100%",
                   alignItems:'center',
                   
               }}>
                   <View style={{
                        width:"100%",
                        display:'flex',

                        flexDirection:'row',
                        }}>
                        <Text style={{
                            fontSize:35,
                            fontWeight:"bold",
                            justifyContent:'space-between'
                        }}
                        >
                          
                        <MaterialIcons name='arrow-back-ios' size={27}color="#FFF"
                           onPress={() => navigation.goBack("MainScreen")}
                        />{"    "}
                        <Text  style={{color:"yellow",marginLeft:25}}>About</Text>{" "}
                        <Text  style={{color:"red",padding:1}}>Us</Text>
                        </Text>
                   </View>
                  
               </View>
           </View>
          
           <View style={styles.contentContainer}>

          
            <ScrollView 
             showsVerticalScrollIndicator={true}
             showsHorizontalScrollIndicator={true}
             style={styles.scrollView}>
                <Text style={styles.text}>
                   This is a mobile app for EBC used to access contact information about individuals and organization ...
                     <Text style={{color:"blue"}}>by THINK IT SOLUTIONS +251966794615 +251923318738</Text> 
                </Text>
            </ScrollView>
      </View>


     </View>
    )
}
const styles = StyleSheet.create({
    contentContainer: {
    margin: 30,
    paddingVertical: 20,
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    color:"black",
    width:"100%",
    
  },
  text: {
    fontSize: 22,
  },
});

export default AboutUsScreen ;