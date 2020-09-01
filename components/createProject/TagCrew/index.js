import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  TextInput,
  Picker,
  Modal,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

// import DropDownPicker from '../common/react-native-dropdown-picker/src/'
import Icon from 'react-native-vector-icons/Feather';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import User from './User'

export const TagCrew = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const [selectedValue, setSelectedValue] = useState("java");


  const [items, setItems] = useState([
    {label: 'Actor', value: 'actor', },
    {label: 'Director', value: 'director', },
]);
  const [value, setValue] = useState();
  let controller;

  return (
    <>
      <StatusBar barStyle="dark-content" />
          <View style={styles.container}> 

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()} 
                >
                    <Image source={require('../../../assets/back.png')}/>
                </TouchableOpacity>

                <Text style={styles.topBarTitle}>ADD NEW PROJECT</Text>
                <TouchableOpacity style={styles.updBtn}
                  onPress={() => {navigation.navigate('Category')}}
                > 
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.content}>
                <Text style={styles.categoryTitle}>tag crew</Text>
                <Text style={styles.hint}>Tagged</Text>
                <View style={styles.horizontal}>
                    <Image source={require('../../../assets/addNewProject/avatar.png')}
                      style={styles.avatar}
                    />
                    <Text style={styles.white}>William Ervin</Text>
                </View>
                <DropDownPicker
                    items={items}
                    controller={instance => controller = instance}
                    onChangeList={(items, callback) => {
                        new Promise((resolve, reject) => resolve(setItems(items)))
                            .then(() => callback())
                            .catch(() => {});
                    }}

                    defaultValue={value}
                    // dropDownStyle={{backgroundColor: '#fafafa', color: '#fff'}}
                    containerStyle={{height: 40,}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                        color: '#fff',
                    }}
                    onChangeItem={item => setValue(item.value)}
                    dropDownStyle={{
                      backgroundColor: '#232324', 
                      width: 150, 
                      borderColor: 'transparent', 
                      color: '#fff', 
                    }}
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                      width: 150,
                      // marginBottom: 35,
                      // marginTop: 15,
                      borderColor: 'transparent',
                      // height: 30,
                      // paddingVertical: 10,
                    }}
                />
                {/* </DropDownPicker> */}
                <View style={styles.border}/>


                <TouchableOpacity 
                  style={[styles.horizontal, {paddingTop: 60}]}
                  onPress={() => {setModalVisible(true)}}
                >
                    <Text style={styles.plus}>+</Text><Text style={styles.addMemberText}>Add a member</Text>
                </TouchableOpacity>
                
            </View>
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
           
            <View style={styles.searchWrapper}>
              <Image source={require('../../../assets/addNewProject/search.png')}/>
              <TextInput 
                  placeholder={'Who’s in your crew?'}
                  selectionColor={'white'}
                  style={styles.searchBar}
                  placeholderTextColor="#6F6F6F" 
              />
            </View>
            {/* <User /> */}
            <Text style={[styles.hint, {marginTop: 36}]}>Suggested</Text>


            <View style={{flexDirection: 'row', width: '100%', marginBottom: 18}}>
              <Image source={require('../../../assets/addNewProject/avatar2.png')}/>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginLeft: 11}}>
                <View style={{justifyContent: 'space-between',}}>
                  <Text style={styles.modalText}>Matthew Safford</Text>
                  <Text style={styles.modalGrayText}>@mattsaff</Text>
                </View>
                <TouchableHighlight
                  // style={{ ...styles.openButton}}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.plus}>+</Text>
                </TouchableHighlight>
              </View>
            </View>
              <View style={styles.border}/>
          </View>
        </View>
      </Modal>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    paddingBottom: 25,
  },
  white: {
    color: '#fff',
    fontSize: 17,
  },
  content: {
    height: Dimensions.get('window').height,
    paddingHorizontal: 20,
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
    transform: [{ scaleY: 1.5 }, { translateY: 10 }, { translateX: -20 }],
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
    fontSize: 15,
    marginBottom: 25,
  },
  addMemberText: {
    color: '#9997EC',
    fontSize: 15,
    lineHeight: 25,
  },  
  plus: {
    color: '#fff',
    marginRight: 20,
    fontSize: 20,
  },
  avatar: {
      marginRight: 14,
  },
  border: {
    height: 1,
    width: '100%',
    backgroundColor: '#353535',
    marginTop: 20,
  },
  searchWrapper: {
    flexDirection: 'row', backgroundColor: '#2c2c2c', borderRadius: 8, width: '100%', alignItems: 'center', paddingHorizontal: 25, paddingVertical: 10,
  },
  searchBar: {
    color: '#fff', marginLeft: 22
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // height: 200,
    // marginTop: 22
    // bottom: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#191919",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
    width: Dimensions.get('window').width
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    color: '#fff',
    fontSize: 15,
  },
  modalGrayText: {
    color: '#5E5E5E',
    fontSize: 15,
  },
});
