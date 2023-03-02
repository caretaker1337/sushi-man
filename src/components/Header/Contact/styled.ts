import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.rem(20)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.rem(30)};
  }
`;

export const StyledLink = styled.a`
  color: black;
  display: block;
  font-size: ${({ theme }) => theme.rem(20)};
  line-height: ${({ theme }) => theme.rem(34)};
  padding-left: ${({ theme }) => theme.rem(35)};
  position: relative;
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.rem(18)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.rem(28)};
    padding-left: 0;
  }

  &::before {
    content: "";
    background: url("/images/header_contact_bg.png") left center/auto 80%
      no-repeat;
    display: inline-block;
    height: ${({ theme }) => theme.rem(33)};
    left: 0;
    position: absolute;
    top: ${({ theme }) => theme.rem(-4)};
    width: ${({ theme }) => theme.rem(33)};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;
