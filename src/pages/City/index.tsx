import React, { useState, useCallback } from "react";
import { ScrollView, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";

import CityModal from "../../components/CityModal";
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
  GradientWrapper,
  ButtonWrapper,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";

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
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { city } = route.params as Params;

  const handleModal = useCallback(() => {
    setModalVisible((oldState) => !oldState);
  }, [modalVisible]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
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

          {Platform.OS === "ios" ? (
            <BlurWrapper intensity={50} tint="dark">
              <Title numberOfLines={1}>{city.name}</Title>
              <Country numberOfLines={1}>{city.country}</Country>
            </BlurWrapper>
          ) : (
            <LinearGradient
              colors={["transparent", "#000"]}
              style={{ borderRadius: 32 }}
            >
              <GradientWrapper>
                <Title numberOfLines={1}>{city.name}</Title>
                <Country numberOfLines={1}>{city.country}</Country>
              </GradientWrapper>
            </LinearGradient>
          )}
        </ImgBackground>

        <AboutWrapper>
          <AboutTitle>About</AboutTitle>
          <About>{city.about}</About>
        </AboutWrapper>

        <ButtonWrapper>
          <Button title="Save" onPress={() => handleModal()} />
        </ButtonWrapper>

        <CityModal
          handleModal={handleModal}
          modalVisible={modalVisible}
          city={city}
        />
      </Container>
    </ScrollView>
  );
}

export default City;
