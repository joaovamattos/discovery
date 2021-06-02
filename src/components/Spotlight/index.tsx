import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import {
  Container,
  Title,
  ImgBackground,
  SaveWrapper,
  SaveButton,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/core";

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

function Spotlight({ data, ...rest }: SpotlightProps) {
  const navigation = useNavigation();

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
            <Feather name="bookmark" size={18} color={colors.gray} />
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
