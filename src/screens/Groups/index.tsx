import React from "react-native";

import { Container, Title } from "./styles";

interface Props {
  title: string;
}

export function Groups({ title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
