import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.TITLE}px;
    font-family: ${theme.font_family.BOLD};
    color: ${theme.colors.WHITE};
  `}

  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.MEDIUM}px;
    font-family: ${theme.font_family.REGULAR};
    color: ${theme.colors.GRAY_300};
  `}

  text-align: center;
`;
