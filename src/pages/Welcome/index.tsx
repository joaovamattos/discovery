import React, { useCallback } from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import logoImage from "../../assets/logo.png";
import travelImage from "../../assets/travel.png";

import {
  Container,
  Logo,
  Title,
  Spotlight,
  Subtitle,
  Travel,
  Button,
} from "./styles";
import colors from "../../styles/colors";

function Welcome() {
  const navigation = useNavigation();

  const handleNavigate = useCallback(() => {
    navigation.navigate("Explore");
  }, []);

  return (
    <Container>
      <Logo source={logoImage} />

      <View>
        <Title>Discover the</Title>
        <Spotlight>best</Spotlight>
        <Subtitle>
          Only with the best cities do you have the best experiences.
        </Subtitle>
      </View>

      <Travel source={travelImage} resizeMode="contain" />

      <Button activeOpacity={0.7} onPress={handleNavigate}>
        <Feather name="chevron-right" size={28} color={colors.white} />
      </Button>
    </Container>
  );
}

export default Welcome;
