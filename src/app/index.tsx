import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import React from "react";
import Categories from "@/src/components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Restaurants from "@/src/components/Restaurants";
import { restaurants } from "@/assets/data/home";
import { Restaurant } from "../constants/types";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{ marginBottom: 100 }}>
          <Text style={styles.header}>Top picks in your neighborhood</Text>
          <FlatList
            scrollEnabled
            showsVerticalScrollIndicator={false}
            data={restaurants}
            renderItem={(item) => Restaurants(item)}
          />
          {/* <Text style={styles.header}>Offers near you</Text> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    backgroundColor: "#fff",
    marginBottom: 40,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
export default Page;
