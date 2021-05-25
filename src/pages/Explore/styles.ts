import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
  padding: 32px;
`;

export const Logo = styled.Image`
  width: 154px;
  height: 36px;
  margin-bottom: 48px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.bold};
  font-size: 42px;
  line-height: 46px;
`;

export const ContinentsList = styled.FlatList`
  margin: 24px 0;
  max-height: 36px;
`;

export const SpotlightList = styled.FlatList`
  max-height: 240px;
`;
