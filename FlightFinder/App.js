import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firstScreen from "./views/firstScreen";
import login from "./views/login";
import register from "./views/register";
import main from "./views/main";
import Procurar from "./views/Procurar";
import ver from "./views/ver";
import { FontAwesome } from '@expo/vector-icons'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
      {/*  <Stack.Navigator headerMode="none">
        <Stack.Screen name="FirstScreen" component={firstScreen}></Stack.Screen>
        <Stack.Screen name="Login" component={login}></Stack.Screen>
        <Stack.Screen name="Register" component={register}></Stack.Screen>
        <Stack.Screen name="Main" component={main}></Stack.Screen>
        {/**<Stack.Screen name="Procurar" component={Procurar}></Stack.Screen>
        <Stack.Screen name="Ver" component={ver}></Stack.Screen>
      </Stack.Navigator>*/}
      

      <Tab.Navigator tabBarOptions={{
      showLabel: false,
      activeTintColor: "black", 
      style: {
      paddingTop: 20,
      backgroundColor: "rgba(255,255,255,0.8)",borderRadius:10, position: "absolute", bottom: "5%",marginRight: "10%",marginLeft: "10%"}}}
    >
      <Tab.Screen name="Flight Finder" component={Procurar} 
       options={{
        tabBarLabel: 'Flight Finder',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="search" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name="Ver" component={ver} 
      options={{
        tabBarLabel: 'ver',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="plane" size={size} color={color} />
        ),
      }}
      />
    </Tab.Navigator>





    </NavigationContainer>
   
     
    );
}