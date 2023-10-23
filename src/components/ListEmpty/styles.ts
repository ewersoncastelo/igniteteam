import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.font_size.HEAD}px;
  font-family: ${({ theme }) => theme.font_family.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY_300};
`;
