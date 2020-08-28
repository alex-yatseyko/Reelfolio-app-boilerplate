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

export const Complete = ({ navigation: { goBack } }) => {

    const [keyboardIsOpen, setKeyboardIsOpen] = useState(false)

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    })

    const _keyboardDidShow = () => {
        setKeyboardIsOpen(true)
    }

    const _keyboardDidHide = () => {
        setKeyboardIsOpen(false)
    }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
          <View style={styles.container}> 

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
            </View>


            <View style={[styles.content, keyboardIsOpen ? {height: Dimensions.get('window').height / 1.5} : {height: Dimensions.get('window').height}  ]}>
                <Text style={styles.blockTitle}>Where can we find it?</Text>
                <View style={styles.inputWrapper}>
                    <TextInput 
                        autoFocus={true}
                        style={styles.input}
                        selectionColor={'white'}
                    />
                </View>
                </View>
          </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    // backgroundColor: '#4161D3',
    flex: 1,
  },


  content: {
    // flex: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },    
  inputWrapper: {
    width: Dimensions.get('window').width - 100,
    borderBottomColor: 'rgba(255, 255, 255, 0.3);',
    borderBottomWidth: 1,
  },
  input: {
    color: '#6A6A6A',
    textAlign: 'center',
    marginTop: 26,
    marginBottom: 10,
    fontSize: 16,
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
  blockTitle: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center'
    },
});
