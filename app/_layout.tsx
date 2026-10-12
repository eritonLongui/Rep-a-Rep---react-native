import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold } from "@expo-google-fonts/manrope";
import { View, ActivityIndicator } from "react-native";
import "../src/global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "#121318", justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#3759F9" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#F7F7F9" },
        }}
      >
        <Stack.Screen name="(auth)/welcome" />
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/onboarding" />
        <Stack.Screen name="(workout-setup)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="workout" options={{ presentation: "fullScreenModal" }} />
        <Stack.Screen name="profile" options={{ presentation: "modal" }} />
      </Stack>
    </>
  );
}
