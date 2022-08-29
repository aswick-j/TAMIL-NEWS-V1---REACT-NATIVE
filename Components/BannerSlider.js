import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const BannerSlider = ({data}) => {
  return (
    <View><Image source={data.image} style={{height:150,width:300,borderRadius:10}} /></View>
  )
}

export default BannerSlider