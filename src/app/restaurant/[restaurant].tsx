
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation, Link } from 'expo-router'
import { getRestaurantByID } from '@/assets/data/restaurant'
import {
  Image,
  ListRenderItem,

  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import Colors from "@/src/constants/Colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useBasketStore } from "@/src/store/basketStore";
import { SafeAreaView } from "react-native-safe-area-context";

const restaurant = () => {

  const {id} = useLocalSearchParams()

  const navigation = useNavigation()

  const restaurant = getRestaurantByID(+id)!

  const [activeIndex, setActiveIndex] = useState(0);

  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const DATA = restaurant.food.map((food, index) => ({
    title: food.category,
    data: food.meals,
    index,
  }));

  const itemList: ListRenderItem<any> = ({ item, index }) => (
    <Link href={{ pathname: "/(modal)/dish", params: { itemId: item.id, restaurantId: id  } }} asChild>
      <TouchableOpacity style={styles.item}>
        <View style={styles.itemList}>
          <Text style={styles.dish}>{item.name}</Text>
          <Text style={styles.dishText}>{item.info}</Text>
          <Text style={styles.dishText}>NGN {item.price}</Text>
        </View>
        <Image source={item.img} style={styles.dishImage} />
      </TouchableOpacity>
    </Link>
  );

  const { items, total } = useBasketStore();

  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerLeft: () => (
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.roundButton}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.rightHeaderIcons}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.roundButton}
          >
            <Ionicons name="share-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.roundButton}
          >
            <Ionicons name="search-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const selectCategory = (index: number) => {
    setActiveIndex(index);
  };

  const onScroll = (event: any) => {};

  return (
    <>
      <ParallaxScrollView
        backgroundColor={"#fff"}
        contentBackgroundColor={Colors.lightGrey}
        parallaxHeaderHeight={250}
        renderBackground={() => (
          <Image
            source={restaurant?.img}
            style={{ width: "100%", height: 300 }}
          />
        )}
        renderStickyHeader={() => (
          <View style={styles.stickySection}>
            <Text style={styles.stickySectionTitle}>{restaurant?.name}</Text>
          </View>
        )}
        stickyHeaderHeight={100}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.restaurantName}>{restaurant?.name}</Text>
          <Text style={styles.restaurantDescription}>
            {restaurant?.delivery} .{" "}
            {restaurant?.tags.map(
              (tag, index) =>
                `${tag}${index < restaurant?.tags.length ? " . " : ""}`
            )}
          </Text>
          <Text style={styles.restaurantDescription}>{restaurant?.about}</Text>
          <SectionList
            contentContainerStyle={{ paddingBottom: 50 }}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  marginHorizontal: 20,
                  height: 1,
                  backgroundColor: Colors.grey,
                }}
              />
            )}
            SectionSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: Colors.grey }} />
            )}
            scrollEnabled={false}
            keyExtractor={(item, index) => `${item.id + index}`}
            sections={DATA}
            renderItem={itemList}
            renderSectionHeader={({ section: { title, index } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          ></SectionList>
        </View>
      </ParallaxScrollView>

      {/* sticky segment */}
      <Animated.View style={[styles.stickySegment, animatedStyle]}>
        <View style={styles.segmentShadow}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.segmentScrollView}
          >
            {restaurant?.food.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={
                  activeIndex === index
                    ? styles.segmentButtonActive
                    : styles.segmentButton
                }
                onPress={() => selectCategory(index)}
              >
                <Text
                  style={
                    activeIndex === index
                      ? styles.segmentTextActive
                      : styles.segmentText
                  }
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Animated.View>
      {/* footer basket */}
      {items > 0 && (
        <View style={styles.footer}>
          <SafeAreaView style={{ backgroundColor: "#fff" }} edges={["bottom"]}>
            <Link href={"/basket"} asChild>
              <TouchableOpacity style={styles.fullButton}>
                <Text style={styles.basket}>{items}</Text>
                <Text style={styles.footerText}>View basket</Text>
                <Text style={styles.basketTotal}>${total.toFixed(2)}</Text>
              </TouchableOpacity>
            </Link>
          </SafeAreaView>
        </View>
      )}
    </>
  );
}

export default restaurant

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
  },
  stickySection: {
    backgroundColor: "#fff",
    height: 75,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  stickySectionTitle: {
    fontSize: 20,
    margin: 10,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  rightHeaderIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  restaurantName: {
    fontSize: 30,
    margin: 16,
  },
  restaurantDescription: {
    fontSize: 16,
    margin: 16,
    lineHeight: 22,
    color: Colors.medium,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
    margin: 16,
  },
  item: {
    backgroundColor: "#fff",
    padding: 16,
    flexDirection: "row",
  },
  itemList: {
    flex: 1,
  },
  dish: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dishText: {
    fontSize: 14,
    color: Colors.mediumDark,
    paddingVertical: 4,
  },
  dishImage: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  stickySegment: {
    position: "absolute",
    height: 50,
    left: 0,
    right: 0,
    top: 80,
    backgroundColor: "#fff",
    overflow: "hidden",
    paddingBottom: 4,
  },
  segmentScrollView: {
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 20,
    paddingBottom: 4,
  },
  segmentShadow: {
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    elevation: 2,
    width: "100%",
    height: "100%",
    shadowRadius: 4,
  },
  segmentButton: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,
  },
  segmentButtonActive: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,
  },
  segmentText: {
    color: Colors.primary,

    fontSize: 16,
  },
  segmentTextActive: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
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

  basket: {
    color: "#fff",
    backgroundColor: "#19aa86",
    padding: 8,
    borderRadius: 2,
    fontWeight: "bold",
  },
  basketTotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 8,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  fullButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    height: 50,
  },
});