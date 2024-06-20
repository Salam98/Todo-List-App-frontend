import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import{NavigationContainer} from '@react-navigation/native';
import HomePage from './components/HomePage';
import Colab from './components/Colab';
import Dashboard from './components/dashboard';
import {Entypo , MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';


const Tab= createMaterialBottomTabNavigator();
const screenOptions={
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    elevation:0,
    height:60,
    background:"#fff"
  }
}

export default function App() {
return(
  <NavigationContainer>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
          name='Daily Tasks' 
          component={HomePage} 
          options={{
            tabBarIcon: ({focused})=>{
              return(
              <View style={styles.focused}>
                <FontAwesome5 name="tasks" size={24} color={focused?'#16247d':'#111'}/>
                
              </View>
              )
            }
          }}/>
      <Tab.Screen 
          name='Colabrative Tasks' 
          component={Colab}
          options={{
            tabBarIcon: ({focused})=>{
              return(
              <View style={styles.focused}>
                <Entypo name="users" size={24} color={focused?'#16247d':'#111'}/>
                
              </View>
              )
            }
          }}/>
      <Tab.Screen
           name='Dashboard' 
           component={Dashboard}
           options={{
            tabBarIcon: ({focused})=>{
              return(
              <View style={styles.focused}>
                <MaterialCommunityIcons name="view-dashboard" size={24} color={focused?'#16247d':'#111'}/>
                
              </View>
              )
            }
          }}/>
     
    </Tab.Navigator>
  </NavigationContainer>
)
}
const styles = StyleSheet.create({
  focused:{
    alignItems:'center',
    justifyContent:'center',
  },
  focusedText:{
    fontSize:12,
    color:'#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    flexWrap:'nowrap'
  },

});
