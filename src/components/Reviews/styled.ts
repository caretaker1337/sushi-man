import { styled } from "~/theme";
import { StyledContainer } from "~/components/Layout/styled";

export const StyledWrapper = styled.section`
  background-image: url("/images/products_bg.jpg");
  background-size: 33.3333% auto;
  padding: ${({ theme }) => theme.rem(60)} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    padding-top: ${({ theme }) => theme.rem(40)};
  }

  ${StyledContainer} {
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      padding-left: ${({ theme }) => theme.rem(20)};
      padding-right: ${({ theme }) => theme.rem(20)};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding-left: ${({ theme }) => theme.rem(10)};
      padding-right: ${({ theme }) => theme.rem(10)};
    }
  }
`;

export const StyledLayout = styled.div`
  margin: 0 auto ${({ theme }) => theme.rem(40)};
  max-width: ${({ theme }) => theme.rem(1200)};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 0;
  }
`;

export const StyledTitle = styled.h2`
  font: ${({ theme }) => theme.rem(40)} ${({ theme }) => theme.fonts.fontBold};
  letter-spacing: ${({ theme }) => theme.rem(1)};
  margin-bottom: ${({ theme }) => theme.rem(20)};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(28)};
  }
`;

export const StyledItem = styled.div`
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    min-height: ${({ theme }) => theme.rem(230)};
  }

  &:focus {
    outline: none;
  }
`;

export const StyledItemLink = styled.a`
  border-radius: ${({ theme }) => theme.rem(15)};
  display: block;
  height: 100%;
  overflow: hidden;
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: ${({ theme }) => theme.rem(5)};
  box-shadow: 0 0 ${({ theme }) => theme.rem(10)} 0 rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
  display: inline-block;
  font: ${({ theme }) => theme.rem(22)} ${({ theme }) => theme.fonts.fontMedium};
  height: ${({ theme }) => theme.rem(55)};
  line-height: ${({ theme }) => theme.rem(55)};
  min-width: ${({ theme }) => theme.rem(190)};
  margin-top: ${({ theme }) => theme.rem(40)};
  padding: 0 ${({ theme }) => theme.rem(15)};
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ theme }) => theme.rem(45)};
    line-height: ${({ theme }) => theme.rem(45)};
    font-size: ${({ theme }) => theme.rem(16)};
    min-width: ${({ theme }) => theme.rem(140)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    top: ${({ theme }) => theme.rem(100)};
  }

  &:hover {
    box-shadow: 0 0 ${({ theme }) => theme.rem(14)} 0 rgba(218, 38, 40, 0.75);
  }
`;

export const StyledItemImage = styled.img``;
