import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ContinentButtonProps extends RectButtonProps {
  title: string;
  active: boolean;
}

function ContinentButton({ title, active, ...rest }: ContinentButtonProps) {
  return (
    <Container {...rest}>
      <Title active={active}>{title}</Title>
    </Container>
  );
}

export default ContinentButton;
