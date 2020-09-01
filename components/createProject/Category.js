import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  Keyboard
} from 'react-native';


import { useKeyboard } from '../../hooks/keyboard.hook'

import {Toast} from '../common/Toast'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export const Category = ({ navigation }) => {

    const [keyboardIsOpen, setKeyboardIsOpen] = useState(false)

  return (
    <>
      <StatusBar barStyle="dark-content" />
          <View style={styles.container}> 

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()} 
                >
                    <Image source={require('../../assets/back.png')}/>
                </TouchableOpacity>

                <Text style={styles.topBarTitle}>ADD NEW PROJECT</Text>
                <TouchableOpacity style={styles.updBtn}
                  onPress={() => {navigation.navigate('TagCrew')}}
                > 
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>


            <View style={[styles.content, keyboardIsOpen ? {height: Dimensions.get('window').height / 1.5} : {height: Dimensions.get('window').height}  ]}>
                <Text style={styles.categoryTitle}>select a category</Text>
                <Text style={styles.hint}>select as many as you want</Text>
                <View style={styles.toastWrapper}>
                    <Toast title="Comedy"/>
                    <Toast title="Directing" />
                    <Toast title="Horror"/>
                    <Toast title="Sketch"/>
                    <Toast title="Comedy"/>
                    <Toast title="Commercial"/>
                    <Toast title="Horror"/>
                    <Toast title="Sketch"/>
                    <Toast title="Comedy"/>
                    <Toast title="Directing"/>
                    <Toast title="Animation"/>
                    <Toast title="Sketch"/>
                </View>
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


  content: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },    
  toastWrapper: {
    flexDirection: 'row',
    width: 300,
    flexWrap: 'wrap',
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
    transform: [{ scaleY: 1.5 }, { translateX: 0 }],
    textTransform: 'uppercase'
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: Dimensions.get('window').width / 6,
    width: Dimensions.get('window').width,
    letterSpacing: -0.01,
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 109.5,
    transform: [{ scaleY: 1.5 }, { translateY: 10 }],
    textTransform: 'uppercase'
  },
  updBtn: {
    backgroundColor: '#5c5c5c',
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  hint: {
    color: '#6A6A6A',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 70,
    },
});
