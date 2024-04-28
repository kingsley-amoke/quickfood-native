import {
  Image,
  ListRenderItem,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import Colors from "@/src/constants/Colors";
import { restaurant } from "@/assets/data/restaurant";

const Details = () => {
  const navigation = useNavigation();

  const DATA = restaurant.food.map((food, index) => ({
    title: food.category,
    data: food.meals,
    index,
  }));

  const itemList: ListRenderItem<any> = ({ item, index }) => (
    <Link href={"/"} asChild>
      <TouchableOpacity style={styles.item}>
        <View style={styles.itemList}>
          <Text style={styles.dish}>{item.name}</Text>
          <Text style={styles.dishText}>{item.info}</Text>
          <Text style={styles.dishText}>${item.price}</Text>
        </View>
        <Image source={restaurant.img} style={styles.dishImage} />
      </TouchableOpacity>
    </Link>
  );

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
  return (
    <>
      <ParallaxScrollView
        backgroundColor={"#fff"}
        contentBackgroundColor={Colors.lightGrey}
        parallaxHeaderHeight={250}
        renderBackground={() => (
          <Image
            source={restaurant.img}
            style={{ width: "100%", height: 300 }}
          />
        )}
        renderStickyHeader={() => (
          <View style={styles.stickySection}>
            <Text style={styles.stickySectionTitle}>{restaurant.name}</Text>
          </View>
        )}
        stickyHeaderHeight={100}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDescription}>
            {restaurant.delivery} .{" "}
            {restaurant.tags.map(
              (tag, index) =>
                `${tag}${index < restaurant.tags.length ? " . " : ""}`
            )}
          </Text>
          <Text style={styles.restaurantDescription}>{restaurant.about}</Text>
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
    </>
  );
};

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
});
export default Details;
