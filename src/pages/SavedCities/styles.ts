import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 32px;
  background: ${colors.background};
`;

export const Logo = styled.Image`
  width: 154px;
  height: 36px;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.bold};
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 36px;
`;

export const CardWrapper = styled.View`
  width: ${Dimensions.get("window").width - 64}px;
  background: ${colors.red};
  margin-bottom: 12px;
  height: 96px;
  border-radius: 16px;
  flex-direction: row;
`;

export const DeleteButton = styled(RectButton)`
  border-radius: 16px;
  width: 64px;
  height: 96px;
  background: ${colors.red};
  align-items: center;
  justify-content: center;
`;
