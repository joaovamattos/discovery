import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 32px;
`;

export const Logo = styled.Image`
  width: 154px;
  height: 36px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.bold};
  font-size: 24px;
  line-height: 28px;
`;

export const Spotlight = styled.Text`
  color: ${colors.purple};
  font-family: ${fonts.bold};
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  color: ${colors.gray};
  font-family: ${fonts.regular};
  font-size: 18px;
  line-height: 22px;
`;

export const Travel = styled.Image`
  height: ${Dimensions.get("window").width * 0.7}px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
  background: ${colors.purple};
  height: 64px;
  width: 64px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;
