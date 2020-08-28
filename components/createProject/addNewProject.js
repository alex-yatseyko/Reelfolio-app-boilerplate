import React, { useState, useEffect } from 'react';
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
  TextInput,
  Keyboard
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { useKeyboard } from '../../hooks/keyboard.hook'

import { NewProject } from './NewProject'
import { Category } from './Category'
import { Complete } from './Complete'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const AddProjectNav = createStackNavigator();

export const addNewProject = ({ navigation: { goBack } }) => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" />  */}
      {/* <SafeAreaView> */}
          {/* <View style={styles.container}> 

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => goBack()} 
                >
                    <Image source={require('../../assets/back.png')}/>
                </TouchableOpacity>

                <Text style={styles.topBarTitle}>ADD NEW PROJECT</Text>
                <TouchableOpacity style={styles.updBtn}> 
                    <Text>Next</Text>
                </TouchableOpacity>
            </View> */}


            <AddProjectNav.Navigator >
                <AddProjectNav.Screen name="Complete" component={Complete} options={{ headerShown: false}} />
                <AddProjectNav.Screen name="Category" component={Category} options={{ headerShown: false}} />
                <AddProjectNav.Screen name="NewProject" component={NewProject} options={{ headerShown: false}} />
            </AddProjectNav.Navigator>
    </>
  );
};
