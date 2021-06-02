import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled(RectButton)`
  height: 64px;
  align-items: center;
  justify-content: center;
  background: ${colors.purple};
  border-radius: 24px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semibold};
  font-size: 18px;
  line-height: 22px;
`;
