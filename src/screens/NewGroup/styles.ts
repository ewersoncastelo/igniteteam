import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;

  justify-content: center;
`;

export const IconNewGroup = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.colors.GREEN_700,
}))`
  align-self: center;
`;
