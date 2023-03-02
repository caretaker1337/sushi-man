import { css, styled } from "~/theme";

export const StyledFooter = styled.footer`
  background-color: #eaeaed;
  border-top: ${({ theme }) => `${theme.rem(4)} solid ${theme.colors.red}`};
  padding-top: ${({ theme }) => theme.rem(40)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.rem(20)};
  }
`;

export const StyledLayout = styled.div`
  display: block;
  text-align: center;
`;

export const StyledLogo = styled.div`
  height: ${({ theme }) => theme.rem(96)};
  margin-bottom: ${({ theme }) => theme.rem(30)};
  margin-left: auto;
  margin-right: auto;
  width: ${({ theme }) => theme.rem(98)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.rem(17)};
  }
`;

export const StyledLogoLink = styled.a`
  cursor: pointer;
  display: block;
  height: 100%;
  position: relative;
`;

export const StyledMenu = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(25)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.rem(14)};
  }
`;

export const StyledMenuList = styled.ul`
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledMenuItem = styled.li`
  margin-right: ${({ theme }) => theme.rem(45)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: ${({ theme }) => theme.rem(30)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    margin-bottom: ${({ theme }) => theme.rem(15)};
    margin-right: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledMenuLink = styled.span`
  color: black;
  cursor: pointer;
  font-size: ${({ theme }) => theme.rem(20)};
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(18)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    font-size: ${({ theme }) => theme.rem(17)};
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const StyledItem = styled.p`
  margin-bottom: ${({ theme }) => theme.rem(17)};
  text-align: center;
`;

export const StyledLink = styled.a`
  color: black;
  display: inline-block;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledCopy = styled.div`
  border-top: ${({ theme }) => theme.rem(1)} solid #9ea0a1;
  font-size: ${({ theme }) => theme.rem(19)};
  text-align: center;
  padding: ${({ theme }) => theme.rem(30)} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.rem(15)} 0;
  }
`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.rem(14)};
  margin-bottom: ${({ theme }) => theme.rem(10)};
`;

export const StyledEmail = styled.a`
  color: black;
  display: inline-block;
  font-size: ${({ theme }) => theme.rem(14)};
  margin-bottom: ${({ theme }) => theme.rem(10)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledCopyText = styled.p`
  font-size: ${({ theme }) => theme.rem(12)};
`;

export const StyledCopyLink = styled.a`
  color: #44d18e;
  text-decoration: none;
`;

export const StyledScrollButton = styled.button<{ isHidden: boolean }>`
  background-color: rgb(239, 239, 239);
  border: none;
  border-radius: ${({ theme }) => theme.rem(4)};
  bottom: ${({ theme }) => theme.rem(110)};
  box-shadow: 0 0 ${({ theme }) => theme.rem(10)} 0 rgba(0, 0, 0, 0.5);
  color: black;
  cursor: pointer;
  height: ${({ theme }) => theme.rem(45)};
  opacity: 0.7;
  position: fixed;
  right: ${({ theme }) => theme.rem(40)};
  width: ${({ theme }) => theme.rem(45)};
  z-index: 200;

  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: ${({ theme }) => theme.rem(80)};
    left: ${({ theme }) => theme.rem(20)};
    right: initial;
  }

  &:hover {
    opacity: 1;
  }
`;

export const StyledChatButton = styled.button`
  background-color: rgb(239, 239, 239);
  border: none;
  border-radius: ${({ theme }) => theme.rem(4)};
  bottom: ${({ theme }) => theme.rem(40)};
  box-shadow: 0 0 ${({ theme }) => theme.rem(10)} 0 rgba(0, 0, 0, 0.5);
  color: black;
  cursor: pointer;
  height: ${({ theme }) => theme.rem(45)};
  opacity: 0.7;
  position: fixed;
  right: ${({ theme }) => theme.rem(40)};
  width: ${({ theme }) => theme.rem(45)};
  z-index: 200;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: ${({ theme }) => theme.rem(15)};
    left: ${({ theme }) => theme.rem(20)};
    right: initial;
  }

  &:hover {
    opacity: 1;
  }
`;

export const StyledContacts = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(25)};
`;

export const StyledContactsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StyledContactsItem = styled.li<{
  type: string;
}>`
  background: url("/images/contact_links_bg.png") center top/100% auto no-repeat;
  height: ${({ theme }) => theme.rem(40)};
  margin-right: ${({ theme }) => theme.rem(30)};
  mix-blend-mode: difference;
  transform: scale(1);
  transition: 0.5s;
  width: ${({ theme }) => theme.rem(40)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: ${({ theme }) => theme.rem(15)};
    transform: scale(0.9);
  }

  ${({ type }) =>
    type === "telegram" &&
    css`
      background-position-y: ${({ theme }) => theme.rem(-49)};
    `};

  ${({ type }) =>
    type === "whatsapp" &&
    css`
      background-position-y: ${({ theme }) => theme.rem(-106)};
    `};

  ${({ type }) =>
    type === "viber" &&
    css`
      background-position-y: ${({ theme }) => theme.rem(-221)};
    `}

  ${({ type }) =>
    type === "phone" &&
    css`
      background-position-y: ${({ theme }) => theme.rem(-164)};
    `}

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledContactsLink = styled.a`
  display: block;
  height: 100%;
`;
