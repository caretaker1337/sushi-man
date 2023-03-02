import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  margin-right: ${({ theme }) => theme.rem(90)};
  height: ${({ theme }) => theme.rem(96)};
  width: ${({ theme }) => theme.rem(98)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-right: ${({ theme }) => theme.rem(30)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ theme }) => theme.rem(80)};
    position: relative;
    width: ${({ theme }) => theme.rem(82)};
    z-index: 40;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    height: ${({ theme }) => theme.rem(80)};
    margin-left: ${({ theme }) => theme.rem(10)};
  }
`;

export const StyledLink = styled.a`
  cursor: pointer;
  display: block;
  height: 100%;
  position: relative;

  &:focus {
    outline: none;
  }
`;
