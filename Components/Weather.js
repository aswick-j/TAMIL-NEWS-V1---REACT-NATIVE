import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Image,
  ImageBackground
} from "react-native";

import axios from "axios";
import * as Location from "expo-location";

const Weather = () => {
  const API_KEY = "73c15d30653293d61c4b7b2be135b6d6";

  let url = `http://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid=${API_KEY}`;

  const [forecast, setForecast] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadForecast = async () => {
    setRefreshing(true);

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}]&lon=${location.coords.longitude}&appid=73c15d30653293d61c4b7b2be135b6d6`
    );

    const data = {
      coord: {
        lon: 80.2739,
        lat: -13.0551,
      },
      weather: [
        {
          id: 803,
          location: "Triplicane",
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
          temp: " 26 °C",
        },
      ],
      base: "stations",
      main: {
        temp: 297.53,
        feels_like: 298.3,
        temp_min: 297.53,
        temp_max: 297.53,
        pressure: 1013,
        humidity: 87,
        sea_level: 1013,
        grnd_level: 1013,
      },
      visibility: 10000,
      wind: {
        speed: 9.38,
        deg: 136,
        gust: 11.79,
      },
      clouds: {
        all: 72,
      },
      dt: 1661791449,
      sys: {
        sunrise: 1661733935,
        sunset: 1661776487,
      },
      timezone: 18000,
      id: 0,
      name: "",
      cod: 200,
    };

    if (!data) {
      Alert.alert("Error", "Something Went Wrong");
    } else {
      setForecast(data);
    }
    setRefreshing(false);
  };
  useEffect(() => {
    loadForecast();
  }, []);

  if (!forecast) {
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  const current = forecast.weather[0];

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => loadForecast()}
          />
        }
        style={{ marginTop: 0 }}
      >
        {/* <Text style={styles.title}>Current Weather</Text> */}
        {/* <Text>{current.location}</Text> */}
        <View
          style={{ flexDirection: "row", }}
        >
          <Image
            style={styles.largeIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/11n@4x.png`,
            }}
          ></Image>
          <Text style={styles.title}>{current.temp}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Weather;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#ECDBBA",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "yellow",
    marginTop:55
  },
  current: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
  },
  largeIcon: {
    width: 100,
    height: 100,
    marginTop:20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
