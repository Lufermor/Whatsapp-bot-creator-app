import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import Home001 from './src/screens/Home001';
import Home002 from './src/screens/Home002';
import ClassHome001 from './src/screens/ClassHome001';
import CreateArticles001 from './src/screens/CreateArticles001';
import Details001 from './src/screens/Details001';
import Edit001 from './src/screens/Edit001';
import Delete001 from './src/screens/Delete001';
import LoginScreen from './src/screens/LoginScreen';

import Contants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Function containing the navigation screens.
function App(){
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
          initialParams={{
            onLoginSuccess: () => navigation.navigate("Home0022222"),
          }}
        />
      <Stack.Screen name = "Home0022222" component={Home002} />
      <Stack.Screen name = "CreateArticles0011" component={CreateArticles001} />
      <Stack.Screen name = "Details001" component={Details001} />
      <Stack.Screen name = "Edit001" component={Edit001} />
      <Stack.Screen name = "Delete001" component={Delete001} />
    </Stack.Navigator>
  );
}

// This is the main navigation function
export default() => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}