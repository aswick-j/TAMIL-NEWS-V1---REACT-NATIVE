import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
const WeatherCompo = ({ item }) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <ImageBackground
          source={item.image}
          style={{ height: 150, width: 300, flexDirection: "row" }}
          imageStyle={{ borderRadius: 15 }}
          borderRadius={10}
        >
          <View style={{ alignItems: "center",marginLeft:10,marginTop:10 }}>
            <Text
              style={{ color: "#ffffff", fontWeight: "600", fontSize: 10 }}
            >
              {item.Day}
            </Text>
            <Image
              style={{ height: 80, width: 80 }}
              source={item.weath_Im}
            />
            <View>
              <Text
                style={{ color: "#ffffff", fontWeight: "bold", fontSize: 10 }}
              >
                {item.weather}
              </Text>
              <Text
                style={{ color: "#ffffff", fontWeight: "600", fontSize: 15 }}
              >
                {item.Time}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: 65,
                textAlign: "center",
                marginLeft:60,
                marginTop:10
              }}
            >
              {item.Temp}
            </Text>
            <Text
              style={{ color: "#ffffff", fontWeight: "600", fontSize: 20 ,marginLeft:40}}
            >
              {item.Qu}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WeatherCompo