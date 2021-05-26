import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Dimensions } from "react-native";

export const Container = styled(RectButton)`
  width: ${Dimensions.get("window").width - 64}px;
  margin-right: 32px;
  background: ${colors.foreground};
  margin-bottom: 12px;
  height: 96px;
  border-radius: 16px;
  padding: 8px;
  flex-direction: row;
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 12px;
`;

export const Wrapper = styled.View`
  margin-left: 16px;
  align-self: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semibold};
  font-size: 18px;
  line-height: 22px;
`;

export const Description = styled.Text`
  width: ${Dimensions.get("window").width / 2}px;
  color: ${colors.gray};
  font-family: ${fonts.regular};
  font-size: 16px;
  line-height: 20px;
  margin-top: 8px;
`;
