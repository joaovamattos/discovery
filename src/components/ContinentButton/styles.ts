import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled(RectButton)`
  height: 36px;
  padding: 0 4px;
  margin-right: 16px;
  justify-content: center;
`;

interface TitleProps {
  active: boolean;
}

export const Title = styled.Text<TitleProps>`
  color: ${(props) => (props.active ? colors.purple : colors.gray)};
  font-family: ${fonts.semibold};
  font-size: 18px;
  line-height: 22px;
`;
