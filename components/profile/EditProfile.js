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

import { 
  SceneMap 
} from 'react-native-tab-view';
import { TabView } from '../common/react-native-tab-view/lib/module/'

import { MyWork } from './MyWork'


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export const EditProfile = ({ navigation: { goBack } }) => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
        <ScrollView
          // contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.navBtn}
              onPress={() => goBack()} 
            >
              <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>

            <Text style={styles.topBarTitle}>Edit Profile</Text>
              <TouchableOpacity style={styles.updBtn}> 
                <Text style={styles.updBtnText}>Update</Text>
              </TouchableOpacity>
          </View>


          <View style={styles.avatarBlock}>
            <Image 
                source={require('../../assets/editProfile/avatar.png')}
            />
            <Text style={styles.userNick}>@werwin</Text>
            <View>
                <View style={styles.bioBlock}>
                  <View style={styles.leftBlock}>
                    <Text style={styles.lightText}>Name</Text>
                  </View>
                  <View style={styles.rightBlock}>
                    <Text style={styles.whiteText}>Will Erwin</Text>
                    <View style={styles.border}/>
                  </View>
                </View>
                <View style={styles.bioBlock}>
                    <View style={styles.leftBlock}>
                      <Text style={styles.lightText}>Bio</Text>
                    </View>
                    <View style={styles.rightBlock}>
                      <Text style={styles.whiteText}>Tell us about you. What are your four favorite movies? Are you repped? Here’s the spot to tell everyone! Start a conversation.</Text>
                    </View>
                </View>
            </View>
          </View>

          <View style={styles.border}/>

          <View style={styles.block}>
            <View style={styles.horizontalBlock}>
              <Text style={styles.blockTitle}>Position</Text>
              <TouchableOpacity>
                <Image source={require('../../assets/editProfile/arrow-right.png')}/>
              </TouchableOpacity>
            </View>
            <ScrollView
                horizontal={true}
                style={styles.horizontalScroll}
              >
                <TouchableOpacity style={styles.toast}>
                    <Text style={styles.toastText}>Director</Text>
                </TouchableOpacity>
            </ScrollView>
          </View>


          <View style={styles.block}>
          <View style={styles.horizontalBlock}>
              <Text style={styles.blockTitle}>Skills</Text>
              <TouchableOpacity>
                <Image source={require('../../assets/editProfile/arrow-right.png')}/>
              </TouchableOpacity>
            </View>

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
          
          
          <View style={[styles.block, {flexDirection: 'row'}]}>
            <View style={styles.leftBlock}>
              <Text style={styles.blockTitle}>My Reel</Text>
            </View>
            <View style={styles.rightBlock}>
                <Image 
                    source={require('../../assets/editProfile/reel.png')}
                    style={{width: (Dimensions.get('window').width / 3.5) * 2, marginBottom: 21}}
                />
                <View style={styles.horizontalBlock}>
                    <TouchableOpacity style={styles.reelBtn}>
                        <Text style={styles.reelBtnText}>Auto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reelBtn}>
                        <Text style={styles.reelBtnText}>Upload New</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>

          <View style={styles.block}>
            <Text style={styles.blockTitle}>My Work</Text>
            <MyWork />
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>My Credits</Text>
    
            <View style={styles.credit}>
                <Image 
                    source={require('../../assets/editProfile/my-credits.png')}
                />
                <View style={styles.creditDetails}>
                    <View>
                        <Text style={styles.whiteText}>Director</Text>
                        <Text style={styles.lightText}>Project Name</Text>
                    </View>
                    <Image 
                        source={require('../../assets/editProfile/additional.png')}
                    />
                </View>
            </View>
            <View style={styles.credit}>
                <Image 
                    source={require('../../assets/editProfile/my-credits.png')}
                />
                <View style={styles.creditDetails}>
                    <View>
                        <Text style={styles.whiteText}>Director</Text>
                        <Text style={styles.lightText}>Project Name</Text>
                    </View>
                    <Image 
                        source={require('../../assets/editProfile/additional.png')}
                    />
                </View>
            </View>
          </View>

        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#191919',
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(255, 255, 255, 0.3);',
    borderBottomWidth: 1,
    top: 48,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    height: 60,
  },
  border: {
    borderBottomColor: 'rgba(255, 255, 255, 0.3);',
    borderBottomWidth: 1,
    marginTop: 15,
  },
  navBtn: {
    width: 20,
    height: 20,
  },
  topBarTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  updBtn: {
    backgroundColor: '#5c5c5c',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: 100,
    // marginRight: 20,
  },
  updBtnText: {
    color: '#fff',
    textAlign: 'center',
  },
  userNick: {
    color: '#A4A4A4',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: 16,
  },    
  avatarBlock: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 100,
  },
  horizontalBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 21,
  },
  reelBtn: {
    backgroundColor: '#3F3F3F',
    borderRadius: 6,
    paddingVertical: 5,
    width: '48%'
  },
  reelBtnText: {
    color: '#fff',
    textAlign: 'center'
  },
  blockTitle: {
      color: '#fff',
      fontSize: 15,
  },
  lightText: {
    color: '#6B6B6B',
    fontSize: 16,
    width: 70,
    textAlign: 'left'
  },
  whiteText: {
    color: '#fff',
    fontSize: 16
  },
  bioBlock: {
    flexDirection: 'row',
    marginTop: 25,
    paddingHorizontal: 25,
  },
  leftBlock: {
    width: Dimensions.get('window').width / 3.5
  },
  rightBlock: {
    width: (Dimensions.get('window').width / 3.5) * 2
  },
    title: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 8,
    },
    owner: {
        color: '#fff',
        opacity: .6
    },
    toast: {
        borderColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        paddingHorizontal: 12,
        // marginHorizontal: 5,
        marginRight: 10,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toastText: {
        color: '#fff'
    },
    credit: {
        paddingVertical: 20,
        flexDirection: 'row',
    },  
    creditDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        marginLeft: 12,
    },
    aside: {
        width: (Dimensions.get('window').width / 3) * 2,
    },


















  bioText: {
    color: '#fff',
    fontSize: 16,
  },
  block: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    paddingVertical: 25,
  },
  skillsBlock: {
    borderBottomColor: 'rgba(255, 255, 255, 0.3);',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center'
  },
  eventsBlock: {
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  skillsTitleWrapper: {
    borderRightColor: 'rgba(255, 255, 255, 0.3);',
    borderRightWidth: 1,
    paddingHorizontal: 25,
    width: Dimensions.get('window').width / 4.5,
    height: '100%',
    justifyContent: 'center',
  },  
  skillsTitle: {
    color: '#fff',
    textAlign: 'center'
  },



  horizontalScroll: {
    width: (Dimensions.get('window').width / 4.5) * 4.5,
    // paddingHorizontal: 10,
    paddingVertical: 18
  },
});
