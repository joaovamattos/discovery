import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Dimensions } from "react-native";
import { BlurView } from "expo-blur";

export const Container = styled.View`
  padding: 32px;
  flex: 1;
`;

export const ImgBackground = styled.ImageBackground`
  height: ${Dimensions.get("window").height * 0.5}px;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.bold};
  font-size: 24px;
  line-height: 26px;
  margin-left: 16px;
`;

export const Country = styled.Text`
  color: ${colors.gray};
  font-family: ${fonts.semibold};
  font-size: 16px;
  line-height: 20px;
  margin: 4px 0 24px 16px;
`;

export const BackWrapper = styled.View`
  align-items: flex-start;
`;

export const BackButton = styled(RectButton)`
  margin: 16px;
  height: 36px;
  width: 36px;
  background: ${colors.background};
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

export const AboutWrapper = styled.View`
  margin-bottom: 36px;
`;

export const AboutTitle = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.bold};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const About = styled.Text`
  color: ${colors.gray};
  font-family: ${fonts.regular};
  font-size: 16px;
  line-height: 20px;
`;

export const BlurWrapper = styled(BlurView)`
  padding-top: 36px;
  border-radius: 32px;
`;
