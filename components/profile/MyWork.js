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

export const MyWork = () => {
    return (
        <View style={styles.projectsWrapper}>
            <View style={styles.project}>
                <Image 
                    source={require('../../assets/profile/2.png')}
                    // style={{width: '100%'}}
                />
                <Text style={styles.title}>Project Title</Text>
                <Text style={styles.owner}>Owner</Text>
            </View>
            <View style={styles.project}>
                <Image 
                    source={require('../../assets/profile/2.png')}
                    // style={{width: '100%'}}
                />
                <Text style={styles.title}>Project Title</Text>
                <Text style={styles.owner}>Owner</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    projectsWrapper: {
        paddingTop: 25,
        height: 200,
        flexDirection: "row",
        justifyContent: 'space-between'
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
    }
})
