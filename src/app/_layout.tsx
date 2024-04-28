import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";

import { TouchableOpacity, useColorScheme } from "react-native";
import CustomHeader from "@/src/components/CustomHeader";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                header: () => <CustomHeader />,
              }}
            />

            <Stack.Screen
              name="(modal)/filters"
              options={{
                presentation: "modal",
                headerTitle: "Filter",
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: Colors.lightGrey,
                },
                headerTitleAlign: "center",

                headerLeft: () => (
                  <TouchableOpacity onPress={navigation.goBack}>
                    <Ionicons
                      name="close-outline"
                      size={28}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen
              name="(modal)/location"
              options={{
                presentation: "fullScreenModal",
                headerTitle: "Select Location",

                headerStyle: {
                  backgroundColor: Colors.lightGrey,
                },
                headerTitleAlign: "center",

                headerLeft: () => (
                  <TouchableOpacity onPress={navigation.goBack}>
                    <Ionicons
                      name="close-outline"
                      size={28}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen
              name="(modal)/dish"
              options={{
                presentation: "modal",
                headerTitle: "",

                headerLeft: () => (
                  <TouchableOpacity onPress={navigation.goBack}>
                    <Ionicons
                      name="close-outline"
                      size={28}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
