import { css, styled } from "~/theme";

export const StyledWrapper = styled.section`
  background: url("/images/contact_bg.jpg") center center/cover no-repeat;
  padding: ${({ theme }) => theme.rem(60)} 0;
  height: ${({ theme }) => theme.rem(280)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    padding: ${({ theme }) => theme.rem(30)} 0;
  }
`;

export const StyledLayout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledTitle = styled.h2`
  color: white;
  font: ${({ theme }) => `${theme.rem(34)} ${theme.fonts.fontMedium}`};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.rem(25)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(24)};
    margin-bottom: ${({ theme }) => theme.rem(25)};
  }
`;

export const StyledText = styled.p`
  color: white;
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontMedium}`};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.rem(20)};
`;

export const StyledLinks = styled.div``;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: space-around;
    max-width: ${({ theme }) => theme.rem(300)};
  }
`;

export const StyledItem = styled.li<{
  type: string;
}>`
  background: url("/images/contact_links_bg.png") center top/100% auto no-repeat;
  height: ${({ theme }) => theme.rem(60)};
  margin-right: ${({ theme }) => theme.rem(30)};
  transform: scale(1);
  transition: 0.5s;
  width: ${({ theme }) => theme.rem(60)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 1 calc(25% - ${({ theme }) => theme.rem(20)});
    margin-right: 0;
    transform: scale(0.9);
  }

  ${({ type }) =>
    type === "telegram" &&
    css`
      background-position-y: ${({ theme }) => theme.rem(-74)};

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        background-position-y: ${({ theme }) => theme.rem(-68)};
      }
    `};

  ${({ type }) =>
    type === "whatsapp" &&
    css`
      background-position-y: ${({ theme }) => theme.rem(-160)};

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        background-position-y: ${({ theme }) => theme.rem(-147)};
      }
    `};

  ${({ type }) =>
    type === "viber" &&
    css`
      background-position-y: ${({ theme }) => theme.rem(-332)};

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        background-position-y: ${({ theme }) => theme.rem(-304)};
      }
    `}

  ${({ type }) =>
    type === "phone" &&
    css`
      background-position-y: ${({ theme }) => theme.rem(-246)};

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        background-position-y: ${({ theme }) => theme.rem(-225)};
      }
    `}

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledLink = styled.a`
  display: block;
  height: 100%;
`;

export const StyledTime = styled.p`
  color: white;
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontMedium}`};
  margin-bottom: ${({ theme }) => theme.rem(25)};
  text-align: center;
`;
