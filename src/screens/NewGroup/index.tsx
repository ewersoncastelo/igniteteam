import React from "react-native";

import { Container, Content, IconNewGroup } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <IconNewGroup />

        <Highlight
          title="Novo Grupo"
          subtitle="Cria um grupo para adicionar os participantes"
        />

        <Button title="Criar Grupo" />
      </Content>
    </Container>
  );
}
