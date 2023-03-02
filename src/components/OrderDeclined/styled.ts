import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  padding: ${({ theme }) => theme.rem(30)} 0;
`;

export const StyledLayout = styled.div`
  text-align: center;
`;

export const StyledTitle = styled.h2`
  font: ${({ theme }) => `${theme.rem(36)} ${theme.fonts.fontMedium}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.rem(24)};
  }
`;

export const StyledImageHolder = styled.div`
  height: ${({ theme }) => theme.rem(240)};
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.rem(200)};
  position: relative;
`;

export const StyledImage = styled.img`
  max-height: ${({ theme }) => theme.rem(240)};
`;

export const StyledButton = styled.a`
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: ${({ theme }) => theme.rem(5)};
  color: white;
  cursor: pointer;
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontMedium}`};
  height: ${({ theme }) => theme.rem(55)};
  line-height: ${({ theme }) => theme.rem(55)};
  min-width: ${({ theme }) => theme.rem(190)};
  padding: 0 ${({ theme }) => theme.rem(15)};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 0 0 ${({ theme }) => theme.rem(14)} 0 rgba(218, 38, 40, 0.75);
  }
`;
