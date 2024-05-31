import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/src/constants/Colors";
import { Link } from "expo-router";
import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons size={20} name="search-sharp" />
          <TextInput
            placeholder="Restaurants, groceries, dishes"
            style={styles.input}
          />
        </View>
        <Link href={"/(modal)/filters"} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons size={20} name="options-outline" color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={require("@/assets/images/bike.png")}
            style={styles.bike}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Your Quick Food</Text>
          <View style={styles.locationName}>
            {/* <Text style={styles.subtitle}></Text> */}
            {/* <Ionicons name="chevron-down" size={20} color={Colors.primary} /> */}
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity> */}
      </View>
      {/* <SearchBar /> */}
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bike: {
    height: 30,
    width: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: Colors.medium,
  textAlign:'center'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  locationName: { flexDirection: "row", alignItems: "center" },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {},
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});
