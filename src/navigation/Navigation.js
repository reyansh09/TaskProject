import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screen/LoginScreen'
import RegisterScreen from '../screen/RegisterScreen'
import DashboardScreen from '../screen/DashboardScreen'

const Stack= createStackNavigator()
const Navigation = () => {
  return (
   <NavigationContainer>
         <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}  />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})