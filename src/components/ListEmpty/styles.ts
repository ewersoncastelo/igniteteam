import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.HEAD}px;
    font-family: ${theme.font_family.REGULAR};
    color: ${theme.colors.GRAY_300};
  `}

  text-align: center;
`;
