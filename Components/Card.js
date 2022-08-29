import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { windowWidth } from '../utils/Dimensions';

import { sliderData } from '../Model/Data';

const Card = () => {
  return (
    <View style={styles.card}><Text>Coming Soon</Text></View>
  )
}


const styles = StyleSheet.create({
    card:{
            height: 150,
            backgroundColor: "white",
            elevation: 10,
            width: windowWidth,
            marginLeft: 10,
            marginRight: 10,
            padding: 15,
            borderRadius: 20,
            marginTop: 20,
    },
})
export default Card