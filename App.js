import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './navigations/Navigator';

const App = () => {
  return(
      <NavigationContainer>
        <HomeStackNavigator/>
      </NavigationContainer>
  )
}
export default App;
