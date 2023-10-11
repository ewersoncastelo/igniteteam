import React, { View, Text } from "react-native";

// import { Container, Title } from "./styles";

interface Props {
  title: string;
}

export function Groups({ title }: Props) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
