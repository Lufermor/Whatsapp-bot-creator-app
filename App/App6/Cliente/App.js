import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import Home001 from './src/screens/Home001';
import ArticlesHome from './src/screens/ArticlesHome';
import ClassHome001 from './src/screens/ClassHome001';
import ArticlesCreate from './src/screens/ArticlesCreate';
import ArticleDetails from './src/screens/ArticleDetails';
import ArticleEdit from './src/screens/ArticleEdit';
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
            onLoginSuccess: () => navigation.navigate("ArticlesHome"),
          }}
        />
      <Stack.Screen name = "ArticlesHome" component={ArticlesHome} />
      <Stack.Screen name = "ArticlesCreate" component={ArticlesCreate} />
      <Stack.Screen name = "ArticleDetails" component={ArticleDetails} />
      <Stack.Screen name = "ArticleEdit" component={ArticleEdit} />
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