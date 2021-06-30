import React, { useCallback, useEffect, useState } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import CityModal from "../../components/CityModal";

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
import { useCities } from "../../hooks/useCities";

interface SpotlightProps extends RectButtonProps {
  data: ICity;
}

interface ICity extends CityProps {
  id: number;
  name: string;
  about: string;
  photo: string;
  country: string;
  continent: string;
  spotlight: boolean;
  rating?: number;
}

function Spotlight({ data, ...rest }: SpotlightProps) {
  const { handleDeleteCity, savedCities } = useCities();
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [saved, setSaved] = useState(() =>
    savedCities.map((city: ICity) => city.id).includes(data.id)
  );

  useEffect(() => {
    const savedIds = savedCities.map((city: ICity) => city.id);

    console.log();

    const isSaved = savedIds.includes(data.id);
    console.log(savedCities.some(data));

    setSaved(isSaved);
  }, [savedCities]);

  const handleModal = useCallback(() => {
    setModalVisible((oldState) => !oldState);
  }, [modalVisible]);

  async function handleDelete(city: CityProps) {
    const cityController = new CityController();
    await cityController.delete(city);

    handleDeleteCity(city);
  }

  return (
    <>
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
            <SaveButton
              onPress={() => (saved ? handleDelete(data) : handleModal())}
            >
              {saved ? (
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

      <CityModal
        handleModal={handleModal}
        modalVisible={modalVisible}
        handleSave={handleModal}
        city={data}
      />
    </>
  );
}

export default Spotlight;
