import React, { useCallback, useEffect, useState } from "react";

import { FlatList } from "react-native";
import CityProps from "../../@types/CityProps";

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
import { CityController } from "../../controller/CityController";

interface ContinentProps {
  key: string;
  title: string;
}

function Explore() {
  const [cities, setCities] = useState<CityProps[]>();
  const [filteredCities, setFilteredCities] = useState<CityProps[]>();
  const [spotlights, setSpotlights] = useState<CityProps[]>();
  const [filteredSpotlights, setFilteredSpotlights] = useState<CityProps[]>();
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
    setFilteredCities(citiesResponse);

    const spotlightCities = citiesResponse.filter(
      (element) => element.spotlight === true
    );
    setSpotlights(spotlightCities);
    setFilteredSpotlights(spotlightCities);
  }, []);

  useEffect(() => {
    if (selectedContinents.includes("all")) {
      setFilteredCities(cities);
      setFilteredSpotlights(spotlights);
    } else {
      setFilteredSpotlights(
        spotlights?.filter((city) => {
          let hasCity = false;
          continents?.forEach((continent) => {
            if (selectedContinents.includes(city.continent)) {
              hasCity = true;
            }
          });
          return hasCity;
        })
      );

      setFilteredCities(
        cities?.filter((city) => {
          let hasCity = false;
          continents?.forEach((continent) => {
            if (selectedContinents.includes(city.continent)) {
              hasCity = true;
            }
          });
          return hasCity;
        })
      );
    }
  }, [selectedContinents, cities]);

  return (
    <Container
      stickyHeaderIndices={[2, 4]}
      showsVerticalScrollIndicator={false}
    >
      <Logo source={logoImage} />
      <Title>Explore</Title>

      <ContinentsList>
        <FlatList
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
      </ContinentsList>

      {filteredSpotlights && filteredSpotlights.length > 0 && (
        <SpotlightList>
          <FlatList
            data={filteredSpotlights}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => <Spotlight data={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </SpotlightList>
      )}

      <Subtitle>Popular</Subtitle>

      {filteredCities &&
        filteredCities?.length > 0 &&
        filteredCities.map((city) => <Card key={city.id} data={city} />)}
    </Container>
  );
}

export default Explore;
