import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.ScrollView`
  flex: 1;
  padding-left: 32px;
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
  font-size: 42px;
  line-height: 46px;
`;

export const ContinentsList = styled.FlatList`
  background: ${colors.background};
  padding: 24px 0;
`;

export const SpotlightList = styled.FlatList`
  max-height: 200px;
  height: 100%;
`;

export const Subtitle = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.bold};
  font-size: 18px;
  line-height: 22px;
  background: ${colors.background};
  padding: 24px 0;
`;
