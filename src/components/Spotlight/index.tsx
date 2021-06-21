import React, { useEffect, useState } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import colors from "../../styles/colors";
import { CityController } from "../../controller/CityController";
import CityProps from "../../@types/CityProps";

import {
  Container,
  Title,
  ImgBackground,
  SaveWrapper,
  SaveButton,
} from "./styles";

interface SpotlightProps extends RectButtonProps {
  data: {
    id: number;
    name: string;
    about: string;
    photo: string;
    country: string;
    continent: string;
    spotlight: boolean;
  };
}

interface ICity extends CityProps {
  rating?: number;
}

function Spotlight({ data, ...rest }: SpotlightProps) {
  const navigation = useNavigation();
  const [savedIds, setSavedIds] = useState<number[]>([]);

  useEffect(() => {
    async function loadSavedCities() {
      const cityController = new CityController();

      const citiesResponse = await cityController.index();
      const savedIds = citiesResponse.map((city: ICity) => city.id);
      setSavedIds(savedIds);
    }

    loadSavedCities();
  }, []);

  return (
    <Container
      {...rest}
      onPress={() => navigation.navigate("City", { city: data })}
    >
      <ImgBackground
        source={{ uri: data.photo }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 32 }}
      >
        <SaveWrapper>
          <SaveButton>
            {savedIds.includes(data.id) ? (
              <Feather name="bookmark" size={18} color={colors.purple} />
            ) : (
              <Feather name="bookmark" size={18} color={colors.gray} />
            )}
          </SaveButton>
        </SaveWrapper>

        <LinearGradient
          colors={["transparent", "#000"]}
          style={{ borderRadius: 32 }}
        >
          <Title numberOfLines={1}>{data.name}</Title>
        </LinearGradient>
      </ImgBackground>
    </Container>
  );
}

export default Spotlight;
