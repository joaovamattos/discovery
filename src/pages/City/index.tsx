import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";

import colors from "../../styles/colors";
import Button from "../../components/Button";

import {
  Container,
  ImgBackground,
  Title,
  Country,
  BackWrapper,
  BackButton,
  AboutTitle,
  About,
  AboutWrapper,
  BlurWrapper,
} from "./styles";

interface Params {
  city: {
    id: number;
    name: string;
    about: string;
    photo: string;
    country: string;
    continent: string;
    spotlight: boolean;
  };
}

function City() {
  const navigation = useNavigation();
  const route = useRoute();
  const { city } = route.params as Params;

  return (
    <Container>
      <ScrollView>
        <ImgBackground
          source={{ uri: city.photo }}
          resizeMode="cover"
          imageStyle={{ borderRadius: 32 }}
        >
          <BackWrapper>
            <BackButton onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={18} color={colors.gray} />
            </BackButton>
          </BackWrapper>

          <BlurWrapper intensity={70} tint="dark">
            <Title numberOfLines={1}>{city.name}</Title>
            <Country numberOfLines={1}>{city.country}</Country>
          </BlurWrapper>
        </ImgBackground>

        <AboutWrapper>
          <AboutTitle>About</AboutTitle>
          <About>{city.about}</About>
        </AboutWrapper>

        <Button title="Save" />
      </ScrollView>
    </Container>
  );
}

export default City;
