import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Dimensions } from "react-native";

interface HasRatingProps {
  hasRating: boolean;
}

export const Container = styled(RectButton)<HasRatingProps>`
  width: ${Dimensions.get("window").width - 64}px;
  margin-right: ${(props) => (props.hasRating ? 0 : "32px")};
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

export const Title = styled.Text<HasRatingProps>`
  color: ${colors.white};
  font-family: ${fonts.semibold};
  font-size: 18px;
  line-height: 22px;
  width: ${(props) => (props.hasRating ? "65%" : "100%")};
`;

export const Description = styled.Text`
  width: ${Dimensions.get("window").width / 2}px;
  color: ${colors.gray};
  font-family: ${fonts.regular};
  font-size: 16px;
  line-height: 20px;
  margin-top: 8px;
`;

export const Row = styled.View`
  width: ${Dimensions.get("window").width - 196}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled.Text`
  color: ${colors.purple};
  font-family: ${fonts.bold};
  font-size: 12px;
  line-height: 16px;
  margin-left: 4px;
`;

export const RatingWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
