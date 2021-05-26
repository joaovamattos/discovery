import React, { useEffect, useState } from "react";

import { Text, FlatList } from "react-native";

import logoImage from "../../assets/logo.png";
import Card from "../../components/Card";
import ContinentButton from "../../components/ContinentButton";
import Spotlight from "../../components/Spotlight";
import server from "../../services/server.json";

import {
  Container,
  Logo,
  Title,
  ContinentsList,
  SpotlightList,
  Subtitle,
} from "./styles";

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

function Explore() {
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
      <Title>Explore</Title>

      <ContinentsList
        data={continents}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => (
          <ContinentButton
            title={item.title}
            active={selectedContinents.includes(item.key)}
            onPress={() => handleSelectContinents(item.key)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <SpotlightList
        data={spotlights}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <Spotlight data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Subtitle>Popular</Subtitle>

      {cities &&
        cities?.length > 0 &&
        cities.map((city) => <Card key={city.id} data={city} />)}
    </Container>
  );
}

export default Explore;
