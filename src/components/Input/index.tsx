import React, { TextInputProps } from "react-native";

import { Container } from "./styles";
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: TextInputProps) {
  const { colors } = useTheme();

  return (
    <Container
      {...rest}
      placeholderTextColor={colors.GRAY_300}
    />
  );
}
