import React from "react";
import Link from "next/link";
import Image from "next/image";

import { theme, ThemeProvider } from "~/theme";
import { GlobalStyle } from "~/theme/global-style";
import { styled } from "~/theme";

const Page404: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <StyledWrapper>
      <Image
        alt="Logo"
        layout="fixed"
        width={100}
        height={90}
        src="/images/logo_img.png"
      />
      <StyledTitle>Page not found</StyledTitle>

      <Link href="/" passHref>
        <StyledButton>Main page</StyledButton>
      </Link>
    </StyledWrapper>
  </ThemeProvider>
);

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  font: ${({ theme }) => `${theme.rem(42)} ${theme.fonts.font}`};
`;

const StyledButton = styled.a`
  background-color: ${({ theme }) => theme.colors.red};
  color: white;
  display: inline-block;
  font: ${({ theme }) => theme.rem(22)} ${({ theme }) => theme.fonts.fontMedium};
  height: ${({ theme }) => theme.rem(55)};
  line-height: ${({ theme }) => theme.rem(55)};
  margin-top: ${({ theme }) => theme.rem(20)};
  min-width: ${({ theme }) => theme.rem(190)};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.rem(37)};
    line-height: ${({ theme }) => theme.rem(37)};
    min-width: ${({ theme }) => theme.rem(110)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    top: ${({ theme }) => theme.rem(100)};
  }

  &:hover {
    box-shadow: 0 0 ${({ theme }) => theme.rem(14)} 0 rgba(218, 38, 40, 0.75);
  }
`;

export default Page404;
