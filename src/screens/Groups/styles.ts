import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #000;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${() => theme.COLORS.GRAY_100};
  font-size: 32px;
`;
