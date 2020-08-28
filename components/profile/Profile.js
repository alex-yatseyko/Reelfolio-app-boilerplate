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
  TouchableHighlight,
  Dimensions,
  Modal
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { TabView, SceneMap  } from '../common/react-native-tab-view/lib/module/'

import { MyWork } from './MyWork'
import { Credited } from './Credited'
import { Event } from './Event'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const initialLayout = { width: Dimensions.get('window').width };

export const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [request, setRequest] = React.useState(false);
  const [isMyProfile, setMyProfile] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'My Work' },
    { key: 'second', title: 'Credited' },
  ]);

  const renderScene = SceneMap({
    first: MyWork,
    second: Credited,
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <TouchableHighlight
              style={{ ...styles.openButton }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>


            <TouchableHighlight style={styles.modalBtn}>
              <Text style={styles.modalText}>Add To Contacts</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.modalBtn}>
              <Text style={styles.modalText}>Share</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.modalBtn}>
              <Text style={styles.modalText}>Copy Link</Text>
            </TouchableHighlight>


          </View>
        </View>
      </Modal>

        <ScrollView
          style={styles.scrollView}>
            <Image
              source={require('../../assets/ReelPreview.png')}
              style={styles.reel}
            />
            <View style={styles.gradientWrapper}>
              <LinearGradient 
                colors={['transparent', 'rgba(24, 24, 24, 0.8)', 'rgba(24, 24, 24, 0.8)']} 
                // colors={['transparent', 'red', 'red']} 
                style={[
                  styles.gradient, 
                  // isMyProfile ? { height: 513} : {height: Dimensions.get('window').height / 2}
                ]}
              />
            </View>

          <Image
            source={require('../../assets/play.png')}
            style={styles.playBtn}
          />
          <View style={styles.header}>
            <TouchableOpacity>
              <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>

            <Text style={styles.topBarTitle}>My Profile</Text>

            <View style={styles.headerBlock}>
              <TouchableOpacity 
                onPress={() => {setModalVisible(true)}}
              >
                <Image source={require('../../assets/more.png')}/>
              </TouchableOpacity>
              <TouchableOpacity> 
                <Image source={require('../../assets/message.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.name}>Matthew Safford</Text>
          <Text style={styles.occupation}>Director</Text>
          <TouchableOpacity style={styles.saved}>
            <Image
              source={require('../../assets/saved.png')}
            />
          </TouchableOpacity>
          <View style={styles.addContactWrapper}>

            {isMyProfile ?
            <TouchableOpacity
              style={styles.editProfileBtn}
              onPress={() => {
                navigation.navigate('EditProfile')
              }}
            >
              <Text style={styles.addContactText}>Edit Profile</Text> 
            </TouchableOpacity>
            :
            <TouchableOpacity 
              style={styles.addContact}
              onPress={() => {
                setRequest(prev => !prev)
              }}
            >
              <Text style={styles.addContactText}>{ request ? 'Requested' : 'Add to Contacts'}</Text>
            </TouchableOpacity>
            }
            <TouchableOpacity>
              <Image 
                source={require('../../assets/Frame.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.block}>
            <Text style={styles.bioText}>This is my personal bio and desctiption of what im doing on this platform</Text>
          </View>
          <View style={styles.skillsBlock}>
            <View style={styles.skillsTitleWrapper}>
              <Text style={styles.skillsTitle}>Skills</Text>
            </View>

            <View>
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
              </ScrollView>
            </View>
          </View>
          {isMyProfile ? 
          <View style={styles.eventsBlock}>
            <Text style={styles.bioText}>Upcoming Events</Text>
            <View style={{height: 20}}/>
            <Event 
              image='../../assets/profile/event1.png'
              title='Project Title'
              positions='3'
              date='May 5th'
            />
            <Event 
              image='../../assets/profile/event2.png'
              title='Event Title'
              positions='2'
              date='July 20th'
            />
          </View> : null}


          <View>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={styles.tabView}
            indicatorContainerStyle={{backgroundColor: 'red'}}
            labelStyle={{color: 'red'}}
            // tabBarPosition="bottom"
            // removeClippedSubviews={true}
            // sceneContainerStyle={{backgroundColor: 'red'}}
          />
          </View>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#191919',
    paddingTop: 0,
    marginTop: 0
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 48,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    alignItems: 'center'
  },
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width / 7
  },
  topBarTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  reel: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },  
  playBtn: {
    position: 'absolute',
    right: 27,
    top: Dimensions.get('window').height / 2,
  },
  saved: {
    position: 'absolute',
    width: 20,
    backgroundColor: 'transparent',
    height: 20,
    right: 20,
    top: Dimensions.get('window').height - Dimensions.get('window').height / 20,
  },
  name: {
    fontSize: 50,
    textTransform: 'uppercase',
    color: '#fff',
    position: 'absolute',
    top: (Dimensions.get('window').height / 3) * 2,
    paddingHorizontal: 25,
    // fontFamily: "GTAmerica-Bold",
    fontWeight: '900',
    transform: [{ scaleX: 1.4 }, { translateX: 40 }]
  },
  occupation: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff',
    position: 'absolute',
    top: (Dimensions.get('window').height / 3) * 2 + 130,
    paddingHorizontal: 25,
    fontWeight: '900',
    transform: [{ scaleX: 1.4 }, { translateX: 20 }]
  },
  addContactWrapper: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomColor: 'rgba(255, 255, 255, 0.3);',
    borderBottomWidth: 1,
    paddingVertical: 25,
  },
  editProfileBtn: {
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: '#fff',
    borderWidth: 1
  },
  addContact: {
    backgroundColor: '#394a71',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  addContactText: {
    color: '#fff',
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
    paddingHorizontal: 10,
    paddingVertical: 18
  },
  toast: {
    borderColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toastText: {
    color: '#fff'
  },
  scene: {
    height: 200,
  },



  gradientWrapper: {
    position: 'absolute',
    // bottom: 0,
    top: 0,
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    // backgroundColor: 'green',
  },
  gradient: {
    marginTop: Dimensions.get('window').height / 2,
    height: Dimensions.get('window').height / 2,
    // position: 'absolute',
    position: 'relative',
    // bottom: 0,
    zIndex: 999,
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height / 2,
  },

  centeredView: {
    flex: 1,
    // backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: "flex-end",
    // alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "#191919",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 34,
  },
  openButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: 4,
    borderRadius: 20,
    marginBottom: 37,
    elevation: 2
  },
  textStyle: {
    color: "transparent",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    color: 'white',
    fontSize: 17,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 6,
    marginTop: 10,
  },
  modalBtn: {
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    backgroundColor: '#191919',
    width: Dimensions.get('window').width - 82
  }
});
