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

export const Complete = ({ navigation }) => {


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
          style={styles.scrollView}>

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
                    <Text style={styles.whiteText}>Upload</Text>
                </TouchableOpacity>
            </View>


                <View style={styles.firstBlock}>
                  <Image style={styles.projectImage} source={require('../../assets/project/preview.png')}/>
                  <Text style={styles.gray}>Title</Text>
                  <Text style={[styles.white, {fontSize: 25}]}>My Movie</Text>
                  <View style={styles.border}/>
                </View>

                <View style={styles.block}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.leftBlock}>
                <Text style={styles.grayText}>Logline</Text>
              </View>
              <View style={styles.rightBlock}>
                  <Text style={styles.whiteText}>Something about something</Text>
              </View>
            </View>
            <View style={{height: 40,}}/>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.leftBlock}>
                <Text style={styles.grayText}>Project details</Text>
              </View>
              <View style={styles.rightBlock}>
                  <Text style={styles.whiteText}>this movie is about this expierence i once had that really shaped methis movie is about this expierence i once had that really shaped me</Text>
              </View>
            </View>
        
          </View>
              </View>
              <View style={styles.block}>
              <Text style={styles.blockTitle}>Cast and Crew</Text>
            <View style={[styles.horizontal, {alignItems: 'center'}]}>
            <View style={styles.horizontal}>
              <Image source={require('../../assets/project/avatar.png')} style={styles.avatar}/>
              <Image source={require('../../assets/project/avatar.png')} style={styles.avatar}/>
              <Image source={require('../../assets/project/avatar.png')} style={styles.avatar}/>
              <Image source={require('../../assets/project/avatar.png')} style={styles.avatar}/>
              <Image source={require('../../assets/project/avatar.png')} style={styles.avatar}/>
              <Image source={require('../../assets/project/avatar.png')} style={styles.avatar}/>
              <Image source={require('../../assets/project/avatar.png')} style={styles.avatar}/>
            </View>
            <View style={[styles.horizontal, {paddingLeft: 20,}]}> 
                <Text style={styles.whiteText}>@williamerwin </Text>
                <Text style={styles.grayText}>and 4 others</Text>
            </View>
            </View>
                    
          </View>


          <View style={styles.block}>
            <Text style={styles.blockTitle}>Category</Text>
            <ScrollView
                horizontal={true}
                style={styles.horizontalScroll}
              >
                <TouchableOpacity style={styles.toast}>
                  <Text style={styles.toastText}>Directing</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.toast}>
                  <Text style={styles.toastText}>Editing</Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.toast}>
                  <Text style={styles.toastText}>Sound Design</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.toast}>
                  <Text style={styles.toastText}>Directing</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.toast}>
                  <Text style={styles.toastText}>Editing</Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.toast}>
                  <Text style={styles.toastText}>Sound Design</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.toast}>
                  <Text style={styles.toastText}>Directing</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.toast}>
                  <Text style={styles.toastText}>Editing</Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.toast}>
                  <Text style={styles.toastText}>Sound Design</Text>
                </TouchableOpacity >
              </ScrollView>
          </View>


        
          </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#191919',
    paddingTop: 0,
  },
  firstBlock: {
    paddingTop: 60,
  },
  block: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    paddingVertical: 25,
  },
  leftBlock: {
    width: Dimensions.get('window').width / 3.5
  },
  rightBlock: {
    width: (Dimensions.get('window').width / 3.5) * 2
  },
  border: {
    backgroundColor: 'rgba(196, 196, 196, 0.24)',
    height: 1,
    width: Dimensions.get('window').width - 40,
  },  
  blockTitle: {
    color: '#fff',
    fontSize: 15,
  },
  white: {
    color: '#fff',
    textAlign: 'center',
    width: Dimensions.get('window').width - 140,
    paddingBottom: 40,
  },
  whiteText: {
    color: '#fff',
  },
  gray: {
    color: 'rgba(255, 255, 255, 0.37)',
    paddingTop: 40,
    paddingBottom: 10,
  },
  grayText: {
    color: '#6C6C6C'
  },
  avatar: {
    marginLeft: -6,
    borderColor: '#191919',
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
    backgroundColor: '#4161D3',
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
  },
  toast: {
    borderColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 14,
    marginHorizontal: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  toastText: {
      color: '#fff'
  }
});
