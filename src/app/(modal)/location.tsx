import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Colors from "@/src/constants/Colors";
import { useNavigation } from "expo-router";

const Location = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: 6.483552,
    longitude: 7.511472,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
          language: "en",
        }}
      />
      <MapView showsUserLocation={true} style={styles.map} region={location} />
      <View style={styles.absoluteBox}>
        <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  absoluteBox: {
    position: "absolute",

    bottom: 20,

    width: "100%",
  },
  button: {
    backgroundColor: Colors.primary,

    alignItems: "center",

    padding: 16,
    margin: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
