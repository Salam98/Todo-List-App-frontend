import React, { useState, useEffect , useContext } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import Colab from './components/Colab';
import Dashboard from './components/dashboard'; 
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import { TodoProvider } from './context/TodoContext';
import {Entypo , MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import './src';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import i18n from 'i18next';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import AppBackground from './context/AppBackground';

const Stack = createNativeStackNavigator();
const Tab= createBottomTabNavigator();


function MainTabs() {
   const { t } = useTranslation();
   const { theme } = useTheme();

  const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false, 
  tabBarStyle: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    height: 65,
    borderRadius: 25,
    //backgroundColor: '#abc4ba',
    backgroundColor: theme.tabBar,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
};
  useEffect(() => {
    const initLanguage = async () => {
      const lang = await AsyncStorage.getItem('language');
      if (lang) {
        await i18n.changeLanguage(lang);
        I18nManager.forceRTL(lang === 'ar');
      }
    };
    initLanguage();
  }, []);
return(
      <Tab.Navigator screenOptions={screenOptions} sceneContainerStyle={{ backgroundColor: 'transparent' }}>
      <Tab.Screen
        name="Daily Tasks"
        component={HomePage}
        initialParams={{ type: 'D' }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="tasks"
                size={22}
                color={!focused ? theme.tabBarInactive  : theme.tabBarActive}
                //color={!focused ? theme.tabIcon : theme.tabIconActive}
              />
              <Text style={{
                fontSize: 10,
                marginTop: 2,
                color: !focused ? theme.tabBarInactive  : theme.tabBarActive
                // color: !focused ? theme.tabIcon : theme.tabIconActive
              }}>
                {t('Daily')}
              </Text>
            </View>
          )
        }}
      />


  <Tab.Screen
    name="My Tasks"
    component={HomePage}
    initialParams={{ type: 'G' }}
    options={{
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: "center" }}>
          <FontAwesome5
            name="tasks"
            size={22}
            color={!focused ? theme.tabBarInactive  : theme.tabBarActive}
            //color={!focused ? theme.tabIcon : theme.tabIconActive}
          />
          <Text style={{
            fontSize: 10,
            marginTop: 2,
            color: !focused ? theme.tabBarInactive  : theme.tabBarActive
          }}>
           {t('my tasks')}
          </Text>
        </View>
      )
    }}
  />

    <Tab.Screen
    name="Dashboard"
    component={Dashboard}
    options={{
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons
            name="view-dashboard"
            size={22}
            color={!focused ? theme.tabBarInactive  : theme.tabBarActive}
            //color={!focused ? theme.tabIcon : theme.tabIconActive}
          />
          <Text style={{
            fontSize: 10,
            marginTop: 2,
            color: !focused ? theme.tabBarInactive  : theme.tabBarActive
            //color: !focused ? theme.tabIcon : theme.tabIconActive
          }}>
            {t('dashboard')}
          </Text>
        </View>
      )
    }}
  />

  <Tab.Screen
    name="Colabrative Tasks"
    component={Colab}
    options={{
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: "center" }}>
          <Entypo
            name="users"
            size={22}
            color={!focused ? theme.tabBarInactive  : theme.tabBarActive}
            // color={!focused ? theme.tabIcon : theme.tabIconActive}
          />
          <Text style={{
            fontSize: 10,
            marginTop: 2,
            color: !focused ? theme.tabBarInactive  : theme.tabBarActive
           // color: !focused ? theme.tabIcon : theme.tabIconActive
          }}>
            {t('colab')}
          </Text>
        </View>
      )
    }}
  />

   <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color={!focused ? theme.tabBarInactive  : theme.tabBarActive}
                //color={!focused ? theme.tabIcon : theme.tabIconActive}
              />
              <Text style={{
                fontSize: 10,
                marginTop: 2,
                color: !focused ? theme.tabBarInactive  : theme.tabBarActive
               // color: !focused ? theme.tabIcon : theme.tabIconActive
              }}>
                {t('Profile')}
              </Text>
            </View>
          )
        }}
      />
</Tab.Navigator>

)
}


export default function App() {
  return (
 <ThemeProvider>
    <TodoProvider>
      <AppBackground>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false,  contentStyle: { backgroundColor: 'transparent' } }}>
          <Stack.Screen name="SignIn" component={SignInScreen}/>
          <Stack.Screen name="SignUp" component={SignUpScreen}/>
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
      </AppBackground>
    </TodoProvider>
  </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  focused:{
    alignItems:'center',
    justifyContent:'center',
  },
  focusedText:{
    fontSize:12,
    color:'#744d75ff',
    flexDirection: 'row',
    textAlign: 'center',
    flexWrap:'nowrap'
  },

});
