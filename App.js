// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './src/page/SplashScreen';
import LoginScreen from './src/page/LoginScreen';
import RegisScreen from './src/page/RegisScreen';
import HomeScreen from './src/page/HomeScreen';
import Topup from './src/page/Topup';
import qrpay from './src/page/qrpay';
import transfer from './src/page/transfer';
import topupsuccess from './src/page/topupsuccess';
import transferconfirm from './src/page/transferconfirm';
import transfersuccess from './src/page/transfersuccess';
import qrconfirm from './src/page/qrconfirm';
import qrsuccess from './src/page/qrsuccess';
import Home from './src/Assets/icon/home.svg'
import Identity from './src/Assets/icon/identity.svg'
import Swap from './src/Assets/icon/swap.svg'
import Profile from './src/page/profile';
import History from './src/page/history';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarIcon: tabState => { return (<Home width={30} height={30} fill={tabState.focused ? '#005690' : '#000'} />) },tabBarShowLabel: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarIcon: tabState => { return (<Identity width={30} height={30} fill={tabState.focused ? '#005690' : '#000'} />) },tabBarShowLabel: false }} />
      <Tab.Screen name="History" component={History} options={{ headerShown: false, tabBarIcon: tabState => { return (<Swap width={30} height={30} fill={tabState.focused ? '#005690' : '#000'} />) },tabBarShowLabel: false }} />

    </Tab.Navigator>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Account Registration" component={RegisScreen} options={{ headerStyle: { backgroundColor: '#005690' }, headerTintColor: 'white' }} />
        <Stack.Screen name='Tab Page' component={TabScreen} options={{ headerShown: false }} />
        <Stack.Screen name="topupsuccess" component={HomeScreen} options={{ headerStyle: { backgroundColor: '#005690' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Top Up" component={Topup} options={{ headerStyle: { backgroundColor: '#005690' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Topupsuccess" component={topupsuccess} options={{ headerShown: false }} />
        <Stack.Screen name="QR Payment" component={qrpay} options={{ headerStyle: { backgroundColor: '#005690' }, headerTintColor: 'white' }} />
        <Stack.Screen name="QR Payment Confirmation" component={qrconfirm} options={{ headerStyle: { backgroundColor: '#005690' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Transfer" component={transfer} options={{ headerStyle: { backgroundColor: '#005690' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Transfer Confirmation" component={transferconfirm} options={{ headerStyle: { backgroundColor: '#005690' }, headerTintColor: 'white' }} />
        <Stack.Screen name="transfersuccess" component={transfersuccess} options={{ headerShown: false }} />
        <Stack.Screen name="QR Payment Success" component={qrsuccess} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;