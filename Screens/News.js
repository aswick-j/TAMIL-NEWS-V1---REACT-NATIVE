import React,{useState,useEffect} from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const News = () => {
  // const categoryList = ["Latest", "Tamilnadu", "India" , "Sports"];
  // const ListCategories = () => {
  //   const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  //   return (
  //       <ScrollView >
  //     <View style={styles.categoryListContainer}>
  //       {categoryList.map((category, index) => (
  //         <Pressable
  //           key={index}
  //           onPress={() => setSelectedCategoryIndex(index)}
  //         >
  //           <Text
  //             style={[
  //               styles.categoryListText,
  //               index == selectedCategoryIndex && styles.activeCategoryListText,
  //             ]}
  //           >
  //             {category}
  //           </Text>
  //         </Pressable>
  //       ))}
  //     </View>
  //     </ScrollView>
  //   );
  // };

  const LatestScreen = () => {
  
      const [news, setNews] = useState([]);
  
      useEffect(() => {
        axios
          .get(
            "https://newsapi.in/newsapi/news.php?key=3UvFfT48bFHmw5orOYBqYujEd6EHJt&category=tamil_state&content_type=full_content"
          )
          .then((res) => {
            const data = res.data;
            // console.log("value=====", data.News);
            setNews(data.News);
          });
      }, []);
  
      return (
        <>
        <ScrollView>
        {news.map((data) => (
        <Pressable
          activeOpacity={0.8}
          onPress={() => navigation.navigate("DetailsScreen", {
            "image": data.image,
             "title": data.title,
             "description": data.description,
             "date":data.published_date
  
          })}
        >
      
            <View style={style.card}>
              <Image source={{uri: data.image}} style={style.cardImage} />
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {data.title}
                  </Text>
                  {/* <Text
                  style={{fontWeight: 'bold', color: COLORS.blue, fontSize: 16}}>
                  {data.published_date}
                </Text> */}
                </View>
  
                {/* Location text */}
  
                <Text style={{ color: "grey", fontSize: 14, marginTop: 5 }}>
                  {data.published_date}
                </Text>
  
                {/* Facilities container */}
                {/* <View style={{marginTop: 10, flexDirection: 'row'}}>
                <View style={style.facility}>
                  <Icon name="hotel" size={18} />
                  <Text style={style.facilityText}>2</Text>
                </View>
                <View style={style.facility}>
                  <Icon name="bathtub" size={18} />
                  <Text style={style.facilityText}>2</Text>
                </View>
                <View style={style.facility}>
                  <Icon name="aspect-ratio" size={18} />
                  <Text style={style.facilityText}>100m</Text>
                </View>
              </View> */}
              </View>
            </View>
         
        </Pressable>
         ))}
         </ScrollView>
         </>
      );
  };

  const TamilNaduScreen = () => {
    return <Text>LivsdeNews</Text>;
  };

  const IndiaScreen = () => {
    return <Text>LivsdeNews</Text>;
  };

  const SportsScreen = () => {
    return <Text>LivsdeNews</Text>;
  };
  return (
    <Tab.Navigator
      style={{ marginTop: 50 }}
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: "tomato",
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarPressColor:"tomato"
      }}
      sceneContainerStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen name="Latest" component={LatestScreen} />
      <Tab.Screen name="TamilNadu" component={TamilNaduScreen} />
      <Tab.Screen name="India" component={IndiaScreen} />
      <Tab.Screen name="Sports" component={SportsScreen} />
    </Tab.Navigator>
    // <SafeAreaView>
    //   <ScrollView>
    //     <View>
    //       <ListCategories />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    paddingHorizontal: 40,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
    color: "dark",
  },
  activeCategoryListText: {
    color: "dark",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});

export default News;


const style = StyleSheet.create({
  card: {
    height: 300,
    backgroundColor: "white",
    elevation: 10,
    width: 400,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
})
