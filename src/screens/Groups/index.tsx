import React from "react-native";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Grupos" subtitle="Reúna seu grupo" />

      <GroupCard title="Galera dos Aventureiros" />
    </Container>
  );
}
