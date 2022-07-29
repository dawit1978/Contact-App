import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';

const ContactListScreen = ({ navigation }) => {
    return(
        <View style={{
            backgroundColor:"gainsboro",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#3F1515",
               height:"18%",
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
                        <Text  style={{color:"yellow",marginLeft:25}}>Contacts</Text>{" "}
                        <Text  style={{color:"red",padding:1}}>List</Text>
                        </Text>
                   </View>
                  
               </View>
           </View>
           <LinearGradient
            colors={["#3F1515", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-10
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   height:90,
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:35,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
                   
               }}>
                   <TextInput
                        placeholder="Search contacts"
                        placeholderTextColor="#3F1515"
                        style={{
                            fontWeight:"bold",
                            fontSize:28,
                            width:260,
                        }}
                   />
                   <Image
                    source={require('../assets/img/3.png')}
                    style={{height:35,width:35}}
                   />
               </View>
            </LinearGradient>


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   
               </View>

     </View>
    )
}
export default ContactListScreen;