import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// import SplashScreen from 'react-native-splash-screen'

import { addNewProject } from './components/createProject/addNewProject'
import { Profile } from './components/profile/Profile'
import { EditProfile } from './components/profile/EditProfile'
import { Project } from './components/project/index'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Header,
} from 'react-native/Libraries/NewAppScreen';

console.disableYellowBox = true;

const ProfileNav = createStackNavigator();

const App: () => React$Node = () => {

  return (
    <>
    <NavigationContainer>
 
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView> */}
      <ProfileNav.Navigator>
        <ProfileNav.Screen name="AddNew" component={addNewProject} options={{ headerShown: false}} />
        <ProfileNav.Screen name="Profile" component={Profile} options={{ headerShown: false}} />
        <ProfileNav.Screen name="Project" component={Project} options={{ headerShown: false}} />
        <ProfileNav.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false}} />
      </ProfileNav.Navigator>
      {/* </SafeAreaView> */}
      </NavigationContainer>
    </>
  );
};

export default App;
