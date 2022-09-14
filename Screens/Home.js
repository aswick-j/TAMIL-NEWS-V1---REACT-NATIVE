import React,{useEffect,useState} from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../Components/Card";


import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarItem";

import { sliderData } from "../Model/Data";
import { windowWidth } from "../utils/Dimensions";
import { Weather } from "../Model/WeatherData";
import WeatherCompo from "../Components/WeatherCompo";


const Home = () => {

  const isCarousel = React.useRef(null);
  
 

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.Heading}>Good Afternoon,</Text>
            <Text style={styles.subHeading}>News Reader</Text>
          </View>
          <Text style={styles.Day}>AUGUST 30</Text>
        </View>
        <View>
          <Text style={styles.HeadingNews}>Breaking News</Text>
          <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={sliderData}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={300}
            inactiveSlideShift={0}
            useScrollView={true}
            loop={true}
          />
        </View>

        <View>
          <Text style={styles.weather}>Weather</Text>
          <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={Weather}
            renderItem={WeatherCompo}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={300}
            inactiveSlideShift={0}
            useScrollView={true}
            loop={true}
          />
        </View>
        <View>
          <Text style={styles.HeadingNews}>Tamil Panchang</Text>
          <Card />
        </View>
        <View>
          <Text style={styles.HeadingNews}>Tamil Astrology</Text>
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Heading: {
    color: "tomato",
    fontSize: 15,
    marginTop: 5,
    marginLeft: 15,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
  Day: {
    fontSize: 10,
    marginTop: 5,
    marginRight: 10,
    fontWeight: "bold",
  },
  HeadingNews: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 30,
  },
  weather: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 5,
    marginBottom:15
  },
  container: {
    height: 150,
    backgroundColor: "grey",
    elevation: 10,
    width: windowWidth,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
  },
});
