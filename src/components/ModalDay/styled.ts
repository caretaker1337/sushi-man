import { css, styled } from "~/theme";

export const StyledWrapper = styled.div``;

export const StyledLayout = styled.div<{
  isOpened: boolean;
}>`
  background: url("/images/contact_bg.jpg") center center/cover no-repeat;
  border-radius: ${({ theme }) => theme.rem(15)};
  left: 0;
  margin: auto;
  max-width: ${({ theme }) => theme.rem(600)};
  min-height: ${({ theme }) => theme.rem(300)};
  min-width: ${({ theme }) => theme.rem(600)};
  opacity: 0;
  padding: ${({ theme }) => theme.rem(60)} 0;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease-in;
  visibility: hidden;
  z-index: 800;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: calc(100% - ${({ theme }) => theme.rem(20)});
    min-width: 0;
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const StyledTitle = styled.h2`
  color: white;
  font: ${({ theme }) => theme.rem(30)} ${({ theme }) => theme.fonts.fontMedium};
  margin-bottom: ${({ theme }) => theme.rem(13)};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.rem(26)};
    padding: 0 ${({ theme }) => theme.rem(10)};
  }
`;

export const StyledTime = styled.p`
  color: white;
  font: ${({ theme }) => theme.rem(20)} ${({ theme }) => theme.fonts.fontMedium};
  margin-bottom: ${({ theme }) => theme.rem(25)};
  text-align: center;
`;

export const StyledText = styled.p`
  color: white;
  font: ${({ theme }) => theme.rem(18)} ${({ theme }) => theme.fonts.fontMedium};
  margin-bottom: ${({ theme }) => theme.rem(20)};
  text-align: center;
`;

export const StyledLinks = styled.div``;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: space-around;
    margin: 0 auto;
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

export const StyledClose = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  height: ${({ theme }) => theme.rem(30)};
  padding: 0;
  position: absolute;
  right: ${({ theme }) => theme.rem(15)};
  top: ${({ theme }) => theme.rem(15)};
  width: ${({ theme }) => theme.rem(30)};

  &:focus {
    outline: none;
  }
`;

export const StyledBackground = styled.div<{ isOpened: boolean }>`
  background: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: ${({ isOpened }) => (isOpened ? "1" : "0")};
  position: fixed;
  right: 0;
  top: 0;
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
  width: 100%;
  z-index: 20;
`;
