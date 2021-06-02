import { useNavigation } from "@react-navigation/core";
import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Image, Wrapper, Title, Description } from "./styles";

interface CardProps extends RectButtonProps {
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

function Card({ data, ...rest }: CardProps) {
  const navigation = useNavigation();

  return (
    <Container
      {...rest}
      onPress={() => navigation.navigate("City", { city: data })}
    >
      <Image source={{ uri: data.photo }} resizeMode="cover" />

      <Wrapper>
        <Title numberOfLines={1}>{data.name}</Title>
        <Description numberOfLines={1}>{data.about}</Description>
      </Wrapper>
    </Container>
  );
}

export default Card;
