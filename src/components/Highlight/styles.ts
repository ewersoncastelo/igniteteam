import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.font_size.TITLE}px;
  font-family: ${({ theme }) => theme.font_family.BOLD};
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.font_size.MEDIUM}px;
  font-family: ${({ theme }) => theme.font_family.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY_300};
`;
