import React, { useState, useCallback, useEffect } from "react";
import { ScrollView, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";

import CityProps from "../../@types/CityProps";
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
import { CityController } from "../../controller/CityController";

interface ICity extends CityProps {
  rating?: number;
}
interface Params {
  city: ICity;
}

function City() {
  const [modalVisible, setModalVisible] = useState(false);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { city } = route.params as Params;

  useEffect(() => {
    async function loadSavedCities() {
      const cityController = new CityController();

      const citiesResponse = await cityController.index();
      const savedIds = citiesResponse.map((city: ICity) => city.id);
      setSavedIds(savedIds);
    }

    loadSavedCities();
  }, []);

  const handleModal = useCallback(() => {
    setModalVisible((oldState) => !oldState);
  }, [modalVisible]);

  const handleSave = useCallback(() => {
    setModalVisible((oldState) => !oldState);
    navigation.navigate("Saved");
  }, [modalVisible]);

  async function handleDelete(city: CityProps) {
    const cityController = new CityController();

    await cityController.delete(city);
    navigation.goBack();
  }

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

        {savedIds.includes(city.id) ? (
          <ButtonWrapper>
            <Button title="Remove" onPress={() => handleDelete(city)} />
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            <Button title="Save" onPress={() => handleModal()} />
          </ButtonWrapper>
        )}

        <CityModal
          handleModal={handleModal}
          modalVisible={modalVisible}
          handleSave={handleSave}
          city={city}
        />
      </Container>
    </ScrollView>
  );
}

export default City;
