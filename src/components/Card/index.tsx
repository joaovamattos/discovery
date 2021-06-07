import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";
import colors from "../../styles/colors";

import {
  Container,
  Image,
  Wrapper,
  Title,
  Description,
  Row,
  Rating,
  RatingWrapper,
} from "./styles";

interface CardProps extends RectButtonProps {
  data: {
    id: number;
    name: string;
    about: string;
    photo: string;
    country: string;
    continent: string;
    spotlight: boolean;
    rating?: number;
  };
}

function Card({ data, ...rest }: CardProps) {
  const navigation = useNavigation();

  return (
    <Container
      {...rest}
      hasRating={!!data.rating}
      onPress={() => navigation.navigate("City", { city: data })}
    >
      <Image source={{ uri: data.photo }} resizeMode="cover" />

      <Wrapper>
        <Row>
          <Title numberOfLines={1} hasRating={!!data.rating}>
            {data.name}
          </Title>
          {data.rating && (
            <RatingWrapper>
              <Feather name="star" color={colors.purple} size={16} />
              <Rating>{`${data.rating}/5`}</Rating>
            </RatingWrapper>
          )}
        </Row>
        <Description numberOfLines={1}>{data.about}</Description>
      </Wrapper>
    </Container>
  );
}

export default Card;
