// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  // ActivityIndicator,
  FlatList,
  TextInput,
  Modal,
  Pressable,
  Alert,
  Button, Linking, Platform,
  TouchableOpacity
  // Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';


const baseURL = 'https://api.jsonstorage.net/v1/json/b8b28667-4983-42a1-b60b-4aad38f39f99/56f707f6-4355-40d7-a720-1ff179e0486e'
// import axios from 'axios';


const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.removeItem('@app_contacts');
    await AsyncStorage.setItem('@app_contacts', jsonValue)
  } catch (e) {
    // saving error
  }
}
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@app_contacts')
    console.log('get data')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

const ContactListScreen = ({ navigation }) => {
  //from api=-----------===----------=-=-=

  

  //--------------------------------------
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  
  //fetching the api
  const fetching = () =>{
  fetch(baseURL)
      .then((response) => response.json())
      // .then((response) =>  JSON.parse(response))
      .then((responseJson) => {
        storeData(responseJson);
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);

      })
      .catch((error) => {
        console.error(error);
      });
}
    // const [isLoading, setIsloading] = useState(false);
const GetItem = ({item}) => {
  
    // Function for click on an item
    // alert('Name : ' + item.firstName +  ' Phone Number : ' + item.phone);
    console.log('modal being called');
  return (
    <View style={{...styles.centeredView, 
            width:'100%',
            marginHorizontal:0,
            paddingHorizontal:0,
            backgroundColor:'#E9EAF0'}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={{...styles.modalView,width: 300,  backgroundColor: '#E9EAF0', marginTop:30}}>
            <View style={{
            width: 80,
            height: 80,
            marginTop:30,
            borderRadius: 180 / 2,
            backgroundColor: '#C4C3D0'
      }}></View>
            <Text style={styles.modalText}>{item.firstName} {item.lastName}</Text>
            <Text style={styles.modalText}>{item.phone}</Text>
            <Button title='call' onPress={() => {
                    Linking.openURL(`tel:${item.phone}`)
                 }} color="green"style={styles.modalText}>{item.phone}</Button>
            <Text style={styles.modalText}>{item.email}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
  };
  useEffect(() => {
    // fetch(baseURL)
    //   .then((response) => response.json())
    //   // .then((response) =>  JSON.parse(response))
    //   .then((responseJson) => {
    //     setFilteredDataSource(responseJson);
    //     setMasterDataSource(responseJson);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    setFilteredDataSource(getData);
    setMasterDataSource(getData);
  }, []);
   
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.firstName
        // const itemData = item.phone
          ? item.firstName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  
  const ItemView = ({ item }) => {
    return (
      
      // Flat List Item
     
   
      <View style={{
        ...styles.modalView,
        fontSize:16,
        fontWeight:'bold',
        backgroundColor:'#DFDEDC'
        
      }}
       
      >

       
          <Text style={styles.itemNameStyle} 
             onPress={() => {setSelectedItem(item);setModalVisible(true); console.log(item);}}>
              Name: { item.firstName } { item.lastName }
          </Text>
            
     

       <Text style={styles.itemPhoneStyle} 
           onPress={() => {setSelectedItem(item);setModalVisible(true); console.log(item);}}>
       <MaterialIcons name='local-phone' size={30}color="#000" />:  { item.phone } 
       </Text>
           
     
      </View>

   
       
    );
  };
   
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.2,
          width: '100%',
        }}
      />
    );
  };

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
               backgroundColor:"#092B9C",
               height:"35%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20,
               alignItems:'center',
            

           }}>
         <View 
             
             style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:45,
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
                            justifyContent:'center',
                            alignItems: 'center'
                        }}
                        >
                          
                        <MaterialIcons name='arrow-back-ios' size={27}color="#FFF"
                           onPress={() => navigation.goBack("MainScreen")}
                        />{"    "} 
                        <Text  style={{color:"yellow",marginLeft:25}}>Contacts List</Text>{" "}
                        
                         
                        </Text>

                       
                   </View>
                  
               </View>
                <View>
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
                       onPress={()=>{
                                    console.log('getting pressed!!!')
                                  fetching();
                                  }}
                            style={{
                              padding: 20,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}
                            //  onPress={() => navigation.navigate('ContactsList')}
                              >
                              <Text style={{fontWeight:"bold",fontSize:22,color:"#fff"}}> refresh </Text>
                              <Pressable
                                 >
                                  <MaterialIcons name='refresh' size={30}color="#FFF" />
                             </Pressable>
                          </TouchableOpacity>

                          
                      </LinearGradient>
                    
                  </View>
               </View>
              <View style={{
                   backgroundColor:"#304FAF",
                   height:70,
                   paddingVertical:1,
                   paddingHorizontal:20,
                   borderRadius:25,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center",
                   justifyContent:'space-around',
                  //  position: 'absolute', 
                    zIndex: 999
               }}>
                    <TextInput
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={search}
                        placeholder="Search contacts"
                        placeholderTextColor="gainsboro"
                        style={{
                            fontWeight:"bold",
                            fontSize:20,
                            width:"100%",
                           
                            
                        }}
                    
                    />
                  <MaterialIcons name='search' size={27}color="#000"/>
               </View>
               
        
       
        <View>
          <GetItem item={selectedItem}/>
           {/* {
            isLoading ? <ActivityIndicator /> : ( */}
              <FlatList
                contentContainerStyle={{flexGrow: 1,
                 justifyContent: 'center',
                 fontSize:16,
                 fontWeight:"bold",
                }}
                data={filteredDataSource}
                // keyExtractor={(item, index) => index.toString()}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
               
            />
             {/* )
         } */}
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemNameStyle: {
    fontFamily:"sans-serif",
    fontSize:22,
    fontWeight:"bold",
     flex: 1,
    height: 58,
    flexDirection: 'row',
    alignItems: 'flex-start',
    color:'#021068',
   
  },
  itemPhoneStyle: {
   display:'flex',
   flexDirection:'row',
   marginBottom:5,
    fontFamily:"sans-serif",
    fontSize:18,
    fontWeight:"bold",
    color:'#021068',

  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    marginTop:40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#ED1C24",
    width:150,
    height:50
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:20,
    fontWeight:'bold',

  }
});

    


export default ContactListScreen;