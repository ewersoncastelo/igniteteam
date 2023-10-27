import React, { FlatList } from "react-native";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera dos aventureiros",
    "Desbravadores",
    "Jovens Geração 566",
  ]);

  return (
    <Container>
      <Header />

      <Highlight title="Grupos" subtitle="Reúna seu grupo" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} onPress={() => {}} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Opa...sem nenhum grupo por aqui" />
        )}
      />

      <Button title="Criar novo grupo" />
    </Container>
  );
}
