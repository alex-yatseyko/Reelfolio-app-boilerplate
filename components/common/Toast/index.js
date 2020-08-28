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
  TouchableHighlight,
  Dimensions,
  Modal,
} from 'react-native';

export const Toast = (props) => {
    [isSelected, setIsSelected] = useState(false)

    return (
        <TouchableOpacity 
            style={
                [styles.toast, 
                isSelected ? {borderColor: 'rgba(255, 255, 255, 0.3)'}: {borderColor: '#fff'}
            ]}
            onPress={() => {setIsSelected(prev => !prev)}}
        >
            <Text style={styles.toastText}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
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
})