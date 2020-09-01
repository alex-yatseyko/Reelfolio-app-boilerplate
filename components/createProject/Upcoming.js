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

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export const Upcoming = ({ navigation }) => {

  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false)

  return (
    <>
      <StatusBar barStyle="dark-content" />
          <View style={styles.container}> 
            <View style={styles.header}>
                <TouchableOpacity 
                  onPress={() => navigation.goBack()} 
                  style={styles.backBtn}
                >
                    <Image source={require('../../assets/back.png')}/>
                </TouchableOpacity>

                <Text style={styles.topBarTitle}>ADD NEW PROJECT</Text>
                <TouchableOpacity style={styles.updBtn}
                  onPress={() => {navigation.navigate('Category')}}
                > 
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>


            <View style={[styles.content, keyboardIsOpen ? {height: Dimensions.get('window').height / 1.5} : {height: Dimensions.get('window').height}  ]}>
                <Image style={styles.projectImage} source={require('../../assets/project/preview.png')}/>
                <Text style={styles.gray}>Title</Text>
                <Text style={styles.white}>Will Ervin</Text>
                <View style={styles.border}/>
                <Text style={styles.gray}>Log Line</Text>
                <Text style={styles.white}>this is a short description of my movie</Text>
                <View style={styles.border}/>
                <Text style={styles.gray}>Description</Text>
                <Text style={styles.white}>What else do you want people to know? Ex. total run time, year, inspiration for the film</Text>
                <View style={styles.border}/>
              </View>
          </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
  },
  border: {
    backgroundColor: 'rgba(196, 196, 196, 0.24)',
    height: 1,
    width: Dimensions.get('window').width - 40,
  },
  white: {
    color: '#fff',
    textAlign: 'center',
    width: Dimensions.get('window').width - 140,
    paddingBottom: 40,
  },
  gray: {
    color: 'rgba(255, 255, 255, 0.37)',
    paddingTop: 40,
    paddingBottom: 10,
  },
  content: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    marginTop: 60,
  },    
  header: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(255, 255, 255, 0.3);',
    borderBottomWidth: 1,
    top: 48,
    height: 120,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    height: 60,
  },
  topBarTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    position: 'absolute',
    width: Dimensions.get('window').width,
    letterSpacing: -0.01,
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 109.5,
    transform: [{ scaleY: 1.5 }, { translateX: 0 }]
  },
  updBtn: {
    backgroundColor: '#5c5c5c',
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  backBtn: {
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  projectImage: {
    width: Dimensions.get('window').width,
  }
});
