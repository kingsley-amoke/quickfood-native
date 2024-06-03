import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { getDishById } from "@/assets/data/restaurant";
import Colors from "@/src/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";

import * as Haptics from "expo-haptics";
import { Product, useBasketStore } from "@/src/store/basketStore";

const Dish = () => {
  const { itemId, restaurantId } = useLocalSearchParams();
  const item = getDishById(+itemId, +restaurantId);
  const navigation = useNavigation();

  const { addProduct } = useBasketStore();


  const addToCart = () => {
    addProduct(item!);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    navigation.goBack();
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      edges={["bottom"]}
    >
      <View style={styles.container}>
        <Animated.Image
          entering={FadeInDown.duration(500).delay(200)}
          source={item?.img}
          style={styles.image}
        />
        <View style={{ padding: 20 }}>
          <Animated.Text
            entering={FadeInLeft.duration(500).delay(200)}
            style={styles.dishName}
          >
            {item?.name}
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.duration(500).delay(400)}
            style={styles.dishInfo}
          >
            {item?.info}
          </Animated.Text>
        </View>
        <View style={styles.footer}>
          <View>
            <TouchableOpacity style={styles.fullButton} onPress={addToCart}>
              <Text style={styles.footerText}>
                Add for NGN {item?.price?.toFixed(2)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  image: { width: "100%", height: 300 },
  dishName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dishInfo: {
    fontSize: 16,
    color: Colors.mediumDark,
  },
  footer: {
    backgroundColor: "#fff",
    paddingTop: 30,
    position: "absolute",
    bottom: 0,

    left: 0,
    width: "100%",
    padding: 10,
    elevation: 10,
    shadowColor: "red",
    shadowRadius: 30,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: -40,
      width: 0,
    },
  },
  footerText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },

  fullButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
});
