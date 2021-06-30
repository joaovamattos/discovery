import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import Routes from "./src/routes";
import { StatusBar } from "react-native";
import colors from "./src/styles/colors";
import { CitiesContextProvider } from "./src/contexts/CitiesContext";

export default function App() {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <CitiesContextProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Routes />
    </CitiesContextProvider>
  );
}
