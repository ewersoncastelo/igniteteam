import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    background-color: ${theme.colors.GRAY_700};
    color: ${theme.colors.WHITE};
    font-family: ${theme.font_family.REGULAR};
    font-size: ${theme.font_size.MEDIUM}px;
  `}

  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  padding: 16px;
`;
