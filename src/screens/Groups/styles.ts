import styled from "styled-components/native";

import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_600};

  padding: ${Constants.statusBarHeight + "px"} 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_100};
  font-size: 32px;
`;
