import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";

const News = () => {
  const categoryList = ["Latest", "Tamilnadu", "India" , "Sports"];
  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
        <ScrollView > 
      <View style={styles.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <Text
              style={[
                styles.categoryListText,
                index == selectedCategoryIndex && styles.activeCategoryListText,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ListCategories />
        </View>
      </ScrollView>
    </SafeAreaView>
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
