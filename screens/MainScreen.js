import { View, Text, Image, ImageBackground,TouchableOpacity, StyleSheet, StatusBar,Dimensions} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
// import {widthPercentageToDP} from '../utils/Dimensions';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function MainScreen({ navigation }) {
    
   return(
    
    <SafeAreaView style={styles.container}>

      
       <StatusBar backgroundColor="#FFF" style="light-content"/>
      
         
       
           <View style={{
             ...styles.myText,
               backgroundColor:"#092B9C",
               height:"58%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               borderTopLeftRadius:20,
               borderTopRightRadius:20,
               alignItems:'center',

           }}>
             
               <Image
                      
                    source={require('../assets/img/ebc5.jpg')}
                    style={{
                     
                      //  ...styles.textLogo,
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20,
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                        // transform:[{rotate:'-15deg'}]
                    }}
               />
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:35,
                   width:"100%",
                   justifyContent:'center',
                   alignItems:'center',

               }}>
                   <View style={{width:"100%"}}>
                        <Text style={{
                               flexDirection:"column",
                                paddingHorizontal:20,
                                width:"100%",
                                // left:0,
                                // right:0,
                              

                              fontSize:5,
                              fontWeight:"bold",
                             
                           
                        }}>
                          <Text style={{...styles.myText, color:"gainsboro"}}>
                                     &#169; Think it solutions
                            </Text>{"       "}
                         
                        </Text>
                   </View>
                  
               </View>
           </View>
      
           

    
     </SafeAreaView>

    )
}
  const {height} = Dimensions.get("screen");
  const height_logo = height * 0.28;
const styles = StyleSheet.create({

  container: { 
      flex:1,
      backgroundColor:"#092B9C",
      alignContent:'center',
      justifyContent:'center',
  },
  textWrapper: {
    height: hp('70%'), // 70% of height device screen
    width: wp('80%')   // 80% of width device screen
  },
  myText: {
    fontSize: hp('5%') // End result looks like the provided UI mockup
  },
  textLogo: {
      width: height_logo,
      height: height_logo
  }
});

export default MainScreen