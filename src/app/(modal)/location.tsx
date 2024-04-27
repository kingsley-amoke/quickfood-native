import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Colors from "@/src/constants/Colors";
import { useNavigation } from "expo-router";
import * as Location from "expo-location";

const MapLocation = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    longitude: 5.42343,
    latitude: 6.483552,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY as string;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let res = await Location.getCurrentPositionAsync({});

      let location = {
        longitude: res.coords.longitude,
        latitude: res.coords.latitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: apiKey,
          language: "en",
        }}
        onFail={(err) => console.log(err)}
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

export default MapLocation;

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
