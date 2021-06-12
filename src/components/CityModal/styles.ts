import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Dimensions } from "react-native";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.View`
  background: rgba(0, 0, 0, 0.7);
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  border-radius: 16px;
  padding: 24px;
  background: ${colors.foreground};
  width: ${Dimensions.get("window").width * 0.75}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.View`
  margin-top: 16px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.bold};
  font-size: 24px;
  line-height: 28px;
  margin: 24px 0;
  text-align: center;
`;

export const RateText = styled.Text`
  color: ${colors.gray};
  font-family: ${fonts.semibold};
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 16px;
`;

export const Photo = styled.Image`
  height: 120px;
  width: 100%;
  border-radius: 12px;
`;
