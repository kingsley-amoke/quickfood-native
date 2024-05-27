import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { categories, restaurants } from "@/assets/data/home";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

import {Restaurant }from '@/src/constants/types'
import Colors from "../constants/Colors";

const Restaurants = ({item: restaurant}:{item:Restaurant}) => {

  return (
    // <ScrollView
    //   contentContainerStyle={{ padding: 15 }} 
    // >

        <Link href={{pathname: `/details/${restaurant.id}`, params: {id: restaurant.id}}} asChild>
          <TouchableOpacity>
            <View style={styles.categoryCard}>
              <Image source={restaurant.img} style={styles.image} />
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{restaurant.name}</Text>
                <Text style={{ color: Colors.green }}>
                  {restaurant.rating} {restaurant.ratings}
                </Text>
                <Text style={{ color: Colors.medium }}>
                  {restaurant.distance}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: '100%',
    height: 320,
    backgroundColor: "#fff",
    marginEnd: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
   
  },
  categoryText: {
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    flex: 10,
    width: undefined,
  },
  categoryBox: {
    flex: 5,
    padding: 10,
    
  },
});
export default Restaurants;
