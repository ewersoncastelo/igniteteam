import styled from "styled-components/native";

import Constants from "expo-constants";
import { useTheme } from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${() => useTheme().colors.GRAY_600};

  padding-top: ${Constants.statusBarHeight + "px"};
`;

export const Title = styled.Text`
  color: ${() => useTheme().colors.GRAY_100};
  font-size: 32px;
`;
