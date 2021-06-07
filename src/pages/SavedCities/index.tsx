import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import logoImage from "../../assets/logo.png";
import Card from "../../components/Card";
import server from "../../services/server.json";
import colors from "../../styles/colors";
import City from "../City";

import { Container, Logo, Title, DeleteButton, CardWrapper } from "./styles";

interface ContinentProps {
  key: string;
  title: string;
}

interface City {
  id: number;
  name: string;
  about: string;
  photo: string;
  country: string;
  continent: string;
  spotlight: boolean;
}

function SavedCities() {
  const [cities, setCities] = useState<City[]>();
  const [spotlights, setSpotlights] = useState<City[]>();
  const [continents, setContinents] = useState<ContinentProps[]>();
  const [selectedContinents, setSelectedContinents] = useState<string[]>([
    "all",
  ]);

  function handleSelectContinents(key: string) {
    if (key === "all") {
      return setSelectedContinents(["all"]);
    }

    if (selectedContinents[0] === "all") {
      return setSelectedContinents([key]);
    }

    if (selectedContinents.includes(key)) {
      if (selectedContinents.length > 1) {
        const filteredContinents = selectedContinents.filter(
          (element) => element !== key
        );
        return setSelectedContinents(filteredContinents);
      }
      return setSelectedContinents(["all"]);
    }

    setSelectedContinents([...selectedContinents, key]);
  }

  useEffect(() => {
    const constinentsResponse = server.continents;
    setContinents([{ key: "all", title: "All" }, ...constinentsResponse]);

    const citiesResponse = server.cities;
    setCities(citiesResponse);

    const spotlightCities = citiesResponse.filter(
      (element) => element.spotlight === true
    );
    setSpotlights(spotlightCities);
  }, []);

  return (
    <Container
      stickyHeaderIndices={[2, 4]}
      showsVerticalScrollIndicator={false}
    >
      <Logo source={logoImage} />
      <Title>My saved cities</Title>

      {cities &&
        cities?.length > 0 &&
        cities.map((city) => (
          <CardWrapper key={city.id}>
            <Swipeable
              overshootRight={false}
              rightThreshold={0}
              overshootFriction={40}
              useNativeAnimations={true}
              renderRightActions={() => (
                <Animated.View>
                  <DeleteButton onPress={() => {}}>
                    <Feather name="trash-2" size={24} color={colors.white} />
                  </DeleteButton>
                </Animated.View>
              )}
            >
              <Card data={{ ...city, rating: 5 }} />
            </Swipeable>
          </CardWrapper>
        ))}
    </Container>
  );
}

export default SavedCities;
