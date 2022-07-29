import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react'

import ContactListScreen from './screens/ContactListScreen';
import MainScreen from './screens/MainScreen';
import ContactListDetailsScreen from './screens/ContactListDetailsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" MainScreen" component={ MainScreen} options={{headerShown:false}} />
        <Stack.Screen name="ContactsList" component={ContactListScreen} options={{headerShown:false}} />
        <Stack.Screen name="ContactsListDetails" component={ContactListDetailsScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App