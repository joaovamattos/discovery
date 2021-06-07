import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Platform } from "react-native";

import colors from "../styles/colors";
import Explore from "../pages/Explore";
import SavedCities from "../pages/SavedCities";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.purple,
        inactiveTintColor: colors.gray,
        labelPosition: "beside-icon",

        style: {
          backgroundColor: colors.background,
          paddingVertical: Platform.OS === "ios" ? 16 : 0,
          height: 64,
          elevation: 0,
          borderTopColor: "transparent",
        },
      }}
    >
      <AppTab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="navigation" size={18} color={color} />
          ),
        }}
      />
      <AppTab.Screen
        name="Saved"
        component={SavedCities}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="bookmark" size={18} color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
