import React, { useCallback, useState } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/core";
import CityModal from "../../components/CityModal";

import CityProps from "../../@types/CityProps";

import { Container, Title, ImgBackground } from "./styles";

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
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = useCallback(() => {
    setModalVisible((oldState) => !oldState);
  }, [modalVisible]);

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
          <LinearGradient
            colors={["transparent", "#0C0F14"]}
            style={{
              borderRadius: 32,
              height: 200,
              justifyContent: "flex-end",
            }}
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
