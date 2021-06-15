import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Animated } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import CityProps from "../../@types/CityProps";

import logoImage from "../../assets/logo.png";
import notFound from "../../assets/notFound.png";

import Card from "../../components/Card";
import { CityController } from "../../controller/CityController";
import colors from "../../styles/colors";

import {
  Container,
  Logo,
  Title,
  DeleteButton,
  CardWrapper,
  NoCitiesImage,
  NoCitiesText,
} from "./styles";

function SavedCities() {
  const [cities, setCities] = useState<CityProps[]>();

  useEffect(() => {
    async function loadSavedCities() {
      const cityController = new CityController();

      const citiesResponse = await cityController.index();
      setCities(citiesResponse);
    }
    loadSavedCities();
  }, [cities]);

  async function handleDelete(city: CityProps) {
    const cityController = new CityController();

    await cityController.delete(city);
    setCities(cities?.filter((city) => city));
  }

  return (
    <Container stickyHeaderIndices={[]} showsVerticalScrollIndicator={false}>
      <Logo source={logoImage} />
      <Title>My saved cities</Title>

      {cities && cities.length > 0 ? (
        cities.map((city) => (
          <CardWrapper key={city.id}>
            <Swipeable
              overshootRight={false}
              rightThreshold={0}
              overshootFriction={40}
              useNativeAnimations={true}
              renderRightActions={() => (
                <Animated.View>
                  <DeleteButton onPress={() => handleDelete(city)}>
                    <Feather name="trash-2" size={24} color={colors.white} />
                  </DeleteButton>
                </Animated.View>
              )}
            >
              <Card data={{ ...city }} />
            </Swipeable>
          </CardWrapper>
        ))
      ) : (
        <View>
          <NoCitiesImage source={notFound} resizeMode="contain" />

          <NoCitiesText>
            No cities yet :c {"\n"} Explore to save cities :D
          </NoCitiesText>
        </View>
      )}
    </Container>
  );
}

export default SavedCities;
