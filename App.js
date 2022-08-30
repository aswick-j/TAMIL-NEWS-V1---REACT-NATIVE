import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./Screens/Home";
import News from "./Screens/News";
import LiveNews from "./Screens/LiveNews";
import Profile from "./Screens/Profile";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "News") {
              iconName = focused ? "newspaper-outline" : "newspaper-outline";
            } else if (route.name === "Live") {
              iconName = focused
                ? "play-circle-outline"
                : "play-circle-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-outline" : "person-outline";
            }
            return <Ionicons name={iconName} size={18} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Tab.Screen name="News" component={News} options={{headerShown:false}}/>
        <Tab.Screen name="Live" component={LiveNews} options={{headerShown:false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
