import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../styles/colors";

import Welcome from "../pages/Welcome";
import Explore from "../pages/Explore";

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <StackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <StackRoutes.Screen name="Welcome" component={Welcome} />
      <StackRoutes.Screen name="Explore" component={Explore} />
    </StackRoutes.Navigator>
  );
};

export default AppRoutes;
