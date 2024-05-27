import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Categories from "@/src/components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Restaurants from "@/src/components/Restaurants";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView style={{ marginBottom: 100 }}>
          <Categories />
          <Text style={styles.header}>Top picks in your neighborhood</Text>
          <Restaurants />
          <Text style={styles.header}>Offers near you</Text>
          <Restaurants />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 90,
    backgroundColor: "#fff",
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
