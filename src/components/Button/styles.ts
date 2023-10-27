import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = "ADDED" | "REMOVED";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "ADDED" ? theme.colors.GREEN_700 : theme.colors.RED_DARK};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.MEDIUM}px;
  font-family: ${({ theme }) => theme.font_family.BOLD};

  color: ${({ theme }) => theme.colors.WHITE};
`;
