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

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';

export const Project = ({ navigation: { goBack } }) => {
    const [isOwner, setIsOwner] = useState( false )
    const [isApplied, setIsApplied] = useState( false )


  return (
    <>
      <StatusBar barStyle="dark-content" />
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
            <View style={styles.topBarTitleWrapper}>
                <View style={styles.topBarTitleBack}>
                    <Text style={styles.topBarTitle}>Shoot in 30 days</Text>
                </View>
            </View>
                {isOwner ? 
              <TouchableOpacity style={styles.updBtn}> 
                <Text style={styles.updBtnText}>Edit</Text>
              </TouchableOpacity>
              : null}
          </View>


          <View style={styles.avatarBlock}>
            <View style={styles.projectImageWrapper}>
                <Image 
                    style={styles.projectImage}
                    source={require('../../assets/project/Image.png')}
                />
            </View>
            <Text style={styles.projectTitle}>PROJECT TITLE</Text>
            <Text style={styles.projectDesc}>Logline: This a description of the project trying to get people to join and work on it. </Text>
                    
          </View>

          <View style={styles.border}/>

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


        { isOwner ?
          <View style={styles.block}>
            <View style={styles.horizontalBlock}>
              <Text style={styles.blockTitle}>Shoot Date</Text>
              <Text style={styles.blockTitle}>10.05.2020</Text>
              <TouchableOpacity>
                <Image source={require('../../assets/editProfile/arrow-right.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        : 
            <View style={[styles.block, {flexDirection: 'row', paddingHorizontal: 0, paddingVertical: 0}]}>
                <View style={[styles.leftBlock, {justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width / 3}]}>
                    <Text style={styles.grayText}>Start Date</Text>
                    <Text style={styles.whiteText}>10.05.2020</Text>
                </View>
                {/* <View style={styles.rightBlock}> */}
                    <TouchableOpacity 
                        style={[styles.applyBtn, isApplied ? {backgroundColor: '#2B2A39'} : {backgroundColor: '#4441D3'}]}
                        onPress={() => {
                            setIsApplied(prev => !prev)
                            // setRequest(prev => !prev)
                        }}
                    >
                        <Text style={styles.blockTitle}>
                            {isApplied ? 'Appplied' : 'Apply'}
                        </Text>
                    </TouchableOpacity>
                {/* </View> */}
            </View>
        }
          

          <View style={[styles.block, {flexDirection: 'row'}]}>
          <View style={styles.leftBlock}>
            <Text style={styles.blockTitle}>Tags</Text>
            </View>
            <View style={styles.rightBlock}>
            <ScrollView
                horizontal={true}
                style={styles.horizontalScroll}
              >
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.toastText}>Directing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.toastText}>Directing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.toastText}>Directing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.toastText}>Directing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.toastText}>Directing</Text>
                </TouchableOpacity>
              </ScrollView>
              </View>
          </View>

          <View style={styles.block}>
            <View style={styles.horizontalBlock}>
                <Text style={styles.blockTitle}>Applications</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/editProfile/arrow-right.png')}/>
                </TouchableOpacity>
            </View> 

            <View style={[{flexDirection: 'row'}]}>
            <View style={styles.leftBlock}>
            </View>
            <View style={styles.rightBlock}>

            <View style={[styles.position]}>
                <Text style={styles.whiteText}>director</Text>
                <View style={styles.number}>
                    <Text style={styles.whiteText}>30</Text>
                </View>
            </View>
            <View style={[styles.position]}>
                <Text style={styles.whiteText}>key grip</Text>
                <View style={styles.number}>
                    <Text style={styles.whiteText}>3</Text>
                </View>
            </View>
            <View style={[styles.position]}>
                <Text style={styles.whiteText}>colorist</Text>
                <View style={styles.number}>
                    <Text style={styles.whiteText}>0</Text>
                </View>
            </View>
            </View>
            </View>
          </View>

          
          <View style={[styles.block, {flexDirection: 'row'}]}>
            <View style={styles.leftBlock}>
              <Text style={styles.blockTitle}>Detail</Text>
            </View>
            <View style={styles.rightBlock}>
                <Text style={styles.whiteText}>This is ongoing description of all the details related to this project. we shoot here and we’re looking for this kind of arrange and this schedule on teh required shoot days. </Text>
            </View>
          </View>

          <View style={styles.block}>
            <Text style={styles.blockTitle}>Genre</Text>
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

          <View style={styles.block}>
            <View style={styles.horizontalBlock}>
              <Text style={styles.blockTitle}>Location</Text>
              <Text style={styles.grayText}>Los Angeles, CA</Text>
            </View>
                    
          </View>

          <View style={styles.block}>
            <Text style={[styles.blockTitle, {paddingBottom: 40}]}>Comments</Text>
           
            <Text style={[styles.whiteText]}>
                <Image 
                    source={require('../../assets/project/avatar.png')}
                />
                <TouchableOpacity>
                    <Text style={styles.linkText}>@safford</Text>
                </TouchableOpacity>
                This looks so cool!
            </Text>

            <TouchableOpacity>
                <Text style={[styles.grayText, {textAlign: 'center', paddingTop: 40,}]}>View all Comments..</Text>
            </TouchableOpacity>
            
            <View style={styles.horizontal}>
                <Image source={require('../../assets/project/avatar.png')}/>
                <TextInput 
                    placeholder="Add a comment as @jonsey"
                    placeholderTextColor="#AAA8A8"
                    style={styles.input}
                    selectionColor={'white'}
                />
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
    // borderBottomColor: 'rgba(255, 255, 255, 0.3);',
    // borderBottomWidth: 1,
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
  topBarTitleWrapper: {
    position: 'absolute',
    justifyContent: 'center', alignItems: 'center',
    width: Dimensions.get('window').width,
},    
topBarTitleBack: {
    borderRadius: 5,
    backgroundColor: '#232323',
    // width: 150,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  topBarTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  updBtn: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  updBtnText: {
    color: '#fff',
    textAlign: 'center',
  },
  projectImageWrapper: {
    paddingLeft: Dimensions.get('window').width / 4,
  },
  projectImage: {
    // position: 'relative',
    // right: 20,
  },    
  projectTitle: {
    color: 'white',
    textAlign: 'left',
    textTransform: 'capitalize',
    marginTop:  -30,
    fontWeight: '900',
    fontSize: 38,
    textTransform: 'uppercase',
    transform: [{ scaleX: 1.4 }, { scaleY: 1.1 }, { translateX: 40 }],
    position: 'relative',
    width: Dimensions.get('window').width / 2,
  },    
  projectDesc: {
    color: 'white',
    fontSize: 14,
    width: (Dimensions.get('window').width / 3) * 2 - 40, 
    paddingLeft: 12, 
    paddingTop: 20,
    paddingBottom: 50,
  },  
  linkText: {
    color: '#9997EC',
    fontSize: 13,
  },
  input: {
    borderColor: 'rgba(255, 255, 255, 0.24)',
    borderWidth: 1,
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 13,
    flex: 1,
    marginLeft: 15,
  },
  horizontal: {
      flexDirection: 'row',
      paddingTop: 20,
  },
  number: {
      backgroundColor: '#3E3E3E',
      paddingVertical: 2,
      paddingHorizontal: 10,
      width: 38,
      alignItems: 'center',
  },
  position: {
    flexDirection: 'row', 
    width: '100%',
    alignItems: 'center',
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  applyBtn: {
    backgroundColor: '#4441D3',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 35
  },
  



  avatarBlock: {
    paddingTop: 60,
  },
  avatar: {
    marginLeft: -6,
    borderColor: '#191919',
    // borderWidth: 2,
  },
  horizontalBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: 13
  },
  grayText: {
    color: '#6C6C6C'
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
    tag: {
        backgroundColor: '#2e2e2e',
        marginRight: 10,
        paddingHorizontal: 13,
        paddingVertical: 3,
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
