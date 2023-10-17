import styled from "styled-components/native";

import Constants from "expo-constants";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_600};

  padding-top: ${Constants.statusBarHeight + "px"};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_100};
  font-size: 32px;
`;
