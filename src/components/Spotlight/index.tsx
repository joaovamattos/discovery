import React from "react";

import { Text } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title, ImgBackground } from "./styles";

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
  return (
    <Container {...rest}>
      <ImgBackground
        source={{ uri: data.photo }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 32 }}
      >
        <Title>{data.name}</Title>
      </ImgBackground>
    </Container>
  );
}

export default Spotlight;
