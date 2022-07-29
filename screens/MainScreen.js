import { View, Text, Image, ImageBackground,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { MaterialIcons } from '@expo/vector-icons';
function MainScreen({ navigation }) {
   return(
        <View style={{
            backgroundColor:"#3F1515",
            flex:1,
            alignContent:'center',
            justifyContent:'center'
            
        }}>
           <View style={{
               backgroundColor:"#3F1515",
               height:"38%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               borderTopLeftRadius:20,
               borderTopRightRadius:20,
               paddingHorizontal:20,
               alignItems:'center',
           }}>
               <Image
                      
                    source={require('../assets/img/ebclogo.png')}
                    style={{
                        height:80,
                        width:200,
                        marginTop:50,
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20,
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                        transform:[{rotate:'-15deg'}]
                    }}
               />
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:35,
                   marginLeft:85,
                   width:"100%",
                   justifyContent:'center',
                   alignItems:'center',

               }}>
                   <View style={{width:"100%"}}>
                        <Text style={{
                            fontSize:35,
                            // color:"#FFF",
                            fontWeight:"bold",
                           
                        }}>
                        <Text style={{color:"green",padding:1}}>EBC</Text>{" "}
                        <Text  style={{color:"yellow",padding:1}}>Contact</Text>{" "}
                        <Text  style={{color:"red",padding:1}}>App</Text>
                        </Text>
                   </View>
                  
               </View>
           </View>

           <LinearGradient
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={{
                flexDirection:"column",
                paddingHorizontal:20,
                width:"100%",
               

                left:0,
                right:0,
                height:90,
            }}
           >
             <TouchableOpacity 
                   style={{
                    padding: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                   }}
                   onPress={() => navigation.navigate('ContactsList')}
                    >
                    <Text style={{fontWeight:"bold",fontSize:22,color:"#fff"}}>Go to Contacts List</Text>
                    <MaterialIcons name='arrow-forward-ios' size={27} color="#FFF" />
                </TouchableOpacity>
              
            </LinearGradient>


              

     </View>
    )
}

export default MainScreen