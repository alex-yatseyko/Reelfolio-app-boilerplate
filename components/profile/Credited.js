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

export const Credited = () => {
    return (
        <View style={styles.projectsWrapper}>
            <View style={styles.project}>
                <Image 
                    source={require('../../assets/profile/2.png')}
                    style={styles.projectImg}
                />
                <View style={styles.projectDetails}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>DIRECTOR</Text>
                        <Text style={styles.owner}>Project Name</Text>
                    </View>
                    <Text style={styles.owner}>2019</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    projectsWrapper: {
        height: 200,
        flexDirection: "row",
        height: 125,
        paddingHorizontal: 25,
        paddingVertical: 25,
    },  
    project: {
        flexDirection: 'row',
        alignItems: 'center'
    },  
    titleWrapper: {
        marginLeft: 10,
    },
    projectDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width / 1.5
        // flex: 1
    },
    projectImg: {
        width: 100,
        height: '100%',
        borderRadius: 2,
    },
    title: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '700'
    },
    owner: {
        color: '#fff',
        opacity: .6
    }
})
