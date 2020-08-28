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
  Modal
} from 'react-native';


export const Event = (props) =>  {
    useEffect(() => {
        // console.log(props.image)
    }, [])    

    return (
        <View style={styles.eventContainer}>
            <Image 
                source={require(`../../assets/profile/event1.png`)}
            />
            <View style={styles.eventDetails}>
                <View>
                    <Text style={styles.title}>Project Title</Text>
                    <Text style={styles.position}>{props.positions} Open Positions</Text>
                </View>
                <Text style={styles.date}>{props.date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    eventContainer: {
        flexDirection: 'row',
        paddingVertical: 13,
        borderBottomColor: 'rgba(255, 255, 255, 0.3);',
        borderBottomWidth: 1,
    },
    eventDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        flex: 1
    }, 
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    position: {
        color: '#9997EC',
        fontSize: 15,
    },
    date: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 14,
    }
})
