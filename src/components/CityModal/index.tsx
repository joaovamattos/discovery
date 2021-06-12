import React, { useState } from "react";
import { Modal, Pressable } from "react-native";
import { Rating } from "react-native-ratings";

import colors from "../../styles/colors";
import Button from "../Button";

import {
  ModalContainer,
  ModalWrapper,
  ModalView,
  ButtonWrapper,
  Title,
  RateText,
  Photo,
} from "./styles";

interface ModalProps {
  handleModal: () => void;
  modalVisible: boolean;
  city: {
    id: number;
    name: string;
    photo: string;
  };
}

function CityModal({ handleModal, modalVisible, city }: ModalProps) {
  const [rating, setRating] = useState(3);

  function ratingCompleted(rating: number) {
    setRating(rating);
  }

  return (
    <ModalContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => handleModal()}
      >
        <ModalWrapper>
          <ModalView>
            <Photo
              source={{
                uri: city.photo,
              }}
              resizeMode="cover"
            />
            <Title numberOfLines={2}>{city.name}</Title>

            <RateText>Rate this city</RateText>

            <Rating
              type="custom"
              ratingCount={5}
              imageSize={36}
              showRating={false}
              onFinishRating={ratingCompleted}
              tintColor={colors.foreground}
              ratingColor={colors.purple}
              ratingBackgroundColor={colors.gray}
              startingValue={3}
            />

            <ButtonWrapper>
              <Pressable onPress={() => handleModal()}>
                <Button title="Done" />
              </Pressable>
            </ButtonWrapper>
          </ModalView>
        </ModalWrapper>
      </Modal>
    </ModalContainer>
  );
}

export default CityModal;
