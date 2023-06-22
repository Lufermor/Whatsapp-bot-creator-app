import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import ArticlesHome from './src/screens/ArticlesHome';
import ArticlesCreate from './src/screens/ArticlesCreate';
import ArticleDetails from './src/screens/ArticleDetails';
import ArticleEdit from './src/screens/ArticleEdit';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

import BotsHome from './src/screens/BotsHome';
import BotDetails from './src/screens/BotDetails';
import BotCreate from './src/screens/BotCreate';
import BotEdit from './src/screens/BotEdit';

import AutomaticResponsesHome from './src/screens/AutomaticResponsesHome';
import AutomaticResponseDetails from './src/screens/AutomaticResponsesDetails';
import AutomaticResponseEdit from './src/screens/AutomaticResponseEdit';
import AutomaticResponseCreate from './src/screens/AutomaticResponseCreate';

import { UserProvider } from './src/UserContext';

import Contants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Function containing the navigation screens.
function App() {
  return (
    <UserProvider>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
          initialParams={{
            onLoginSuccess: () => navigation.navigate("HomeScreen"),
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "WhatsApp bots home!",
            headerStyle: {
              backgroundColor: "#008B8B",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ArticlesCreate")}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  New
                </Text>
              </TouchableOpacity>
            ),
          })} />
          <Stack.Screen
          name="BotsHome"
          component={BotsHome}
          options={({ navigation }) => ({
            title: "Your bots!",
            headerStyle: {
              backgroundColor: "#008B8B",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("BotCreate")}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  New
                </Text>
              </TouchableOpacity>
            ),
          })} />
          <Stack.Screen
          name="BotDetails"
          component={BotDetails}
          options={({ navigation }) => ({
            title: "Bot details",
            headerStyle: {
              backgroundColor: "#008B8B",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerTintColor: "#fff",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("BotsHome")}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  Home
                </Text>
              </TouchableOpacity>
            ),
          })} />
          <Stack.Screen name="BotCreate" component={BotCreate} />
          <Stack.Screen name="BotEdit" component={BotEdit} />
          <Stack.Screen
          name="AutomaticResponsesHome"
          component={AutomaticResponsesHome}
          options={({ navigation }) => ({
            title: "Bot's Automatic responses",
            headerStyle: {
              backgroundColor: "#008B8B",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("AutomaticResponseCreate")}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  New
                </Text>
              </TouchableOpacity>
            ),
          })} />
          <Stack.Screen
          name="AutomaticResponseDetails"
          component={AutomaticResponseDetails}
          options={({ navigation }) => ({
            title: "Automatic response",
            headerStyle: {
              backgroundColor: "#008B8B",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerTintColor: "#fff",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("AutomaticResponsesHome")}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  Home
                </Text>
              </TouchableOpacity>
            ),
          })} />
          <Stack.Screen name="AutomaticResponseEdit" component={AutomaticResponseEdit} />
          <Stack.Screen name="AutomaticResponseCreate" component={AutomaticResponseCreate} />
        <Stack.Screen
          name="ArticlesHome"
          component={ArticlesHome}
          options={({ navigation }) => ({
            title: "Articles App",
            headerStyle: {
              backgroundColor: "#008B8B",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ArticlesCreate")}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  New
                </Text>
              </TouchableOpacity>
            ),
          })} />
          
        <Stack.Screen name="ArticlesCreate" component={ArticlesCreate} />
        <Stack.Screen
          name="ArticleDetails"
          component={ArticleDetails}
          options={({ navigation }) => ({
            title: "Article details",
            headerStyle: {
              backgroundColor: "#008B8B",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerTintColor: "#fff",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ArticlesHome")}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  Home
                </Text>
              </TouchableOpacity>
            ),
          })} />
        <Stack.Screen name="ArticleEdit" component={ArticleEdit} />
      </Stack.Navigator>
    </UserProvider>
  );
}

// This is the main navigation function
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}