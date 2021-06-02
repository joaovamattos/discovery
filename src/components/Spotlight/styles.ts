import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled(RectButton)`
  margin-right: 16px;
`;

export const ImgBackground = styled.ImageBackground`
  height: 200px;
  width: 180px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semibold};
  font-size: 18px;
  line-height: 22px;
  margin: 16px;
`;

export const SaveWrapper = styled.View`
  align-items: flex-end;
`;
export const SaveButton = styled(RectButton)`
  margin: 16px;
  height: 36px;
  width: 36px;
  background: ${colors.background};
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;
