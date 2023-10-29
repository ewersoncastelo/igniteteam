import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.GRAY_600};

  flex: 1;
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.GRAY_700};

  flex-direction: row;
  justify-content: center;

  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`;

export const NumbersOfPlayer = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_200};
    font-family: ${theme.font_family.BOLD};
    font-size: ${theme.font_size.SUBHEAD}px;
  `}
`;
