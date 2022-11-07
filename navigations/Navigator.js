import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { MaterialIcons } from '@expo/vector-icons';

import MainScreen from '../screens/MainScreen'
import ContactListScreen from '../screens/ContactListScreen'
import AboutUsScreen from '../screens/AboutUsScreen';


import { responsiveFontSize } from '../utils/Dimensions'
import { responsiveHeight } from '../utils/Dimensions'
import { responsiveWidth } from '../utils/Dimensions'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
         
           screenOptions={{
            tabBarStyle: { position: 'absolute' },
            //  tabBarActiveTintColor: '#092B9C',
        
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingTop:35,
                    elevation:2,
                        paddingVertical:30,
                    backgroundColor:  'transparent',
                        borderTopWidth: 0,
                        position: 'absolute',
                        left: 50,
                        right: 50,
                        bottom: 20,
                        height: 100,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                         borderTopWidth: 0,
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            height: 55,
            paddingBottom: 5
                  },
                
            }}
        >
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    headerShown:false,
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        
      
                       <MaterialIcons name='home'  color={color} size={33} />
                    )
                }}
            />

            <Tab.Screen
                name="contactsList"
                component={ContactListScreen}
                options={{
                    headerShown:false,

                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <MaterialIcons name='contact-page' color={color} size={33} />
                    )
                }}
            />
            <Tab.Screen
                name="aboutUs"
                component={AboutUsScreen}
                options={{
                    headerShown:false,

                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <MaterialIcons name='people'color={color} size={33} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createNativeStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
       
      <Stack.Navigator
       initialRouteName="MainScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
        >

        <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown:false}} />
        <Stack.Screen name=" MainScreen" component={ MainScreen} options={{headerShown:false}} />
        <Stack.Screen name="ContactsList" component={ContactListScreen} options={{headerShown:false}} />
        {/* <Stack.Screen name="ContactsList" component={Search} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="ContactsListDetails" component={ContactListDetailsScreen} options={{headerShown:false}} /> */}
      </Stack.Navigator>
    
    )
}

export default HomeStackNavigator;
