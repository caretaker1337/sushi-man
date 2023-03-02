import Image from "next/image";

import { keyframes, styled } from "~/theme";

const rotate = keyframes`
  from {
    transform: rotate(0deg) translateY(-50%);
  }

  to {
    transform: rotate(360deg) translateY(-50%);
  }
`;

export const StyledWrapper = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.rem(15)};
  box-shadow: 0 0 ${({ theme }) => theme.rem(10)} 0 rgba(0, 0, 0, 0.5);
  flex: 0 1 calc(25% - ${({ theme }) => theme.rem(20)});
  margin-bottom: ${({ theme }) => theme.rem(20)};
  margin-left: ${({ theme }) => theme.rem(10)};
  margin-right: ${({ theme }) => theme.rem(10)};
  max-width: calc(25% - ${({ theme }) => theme.rem(20)});
  overflow: hidden;
  padding: 0 0 ${({ theme }) => theme.rem(10)} 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex: 0 1 calc(25% - ${({ theme }) => theme.rem(10)});
    margin-bottom: ${({ theme }) => theme.rem(10)};
    margin-left: ${({ theme }) => theme.rem(5)};
    margin-right: ${({ theme }) => theme.rem(5)};
    max-width: calc(25% - ${({ theme }) => theme.rem(10)});
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 1 calc(50% - ${({ theme }) => theme.rem(10)});
    margin-bottom: ${({ theme }) => theme.rem(10)};
    margin-left: ${({ theme }) => theme.rem(5)};
    margin-right: ${({ theme }) => theme.rem(5)};
    max-width: calc(50% - ${({ theme }) => theme.rem(10)});
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.rem(10)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    display: flex;
    flex: 0 1 calc(100% - ${({ theme }) => theme.rem(10)});
    max-width: 100%;
    padding-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXs}) {
    flex-direction: column;
  }
`;

export const StyledLayout = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXs}) {
    padding-bottom: ${({ theme }) => theme.rem(60)};
  }
`;

export const StyledImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    border-top-left-radius: ${({ theme }) => theme.rem(15)};
    border-bottom-left-radius: ${({ theme }) => theme.rem(15)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXs}) {
    border-bottom-left-radius: 0;
  }
`;

export const StyledImageHolder = styled.div`
  height: ${({ theme }) => theme.rem(340)};
  margin-bottom: ${({ theme }) => theme.rem(20)};
  overflow: hidden;
  position: relative;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
    min-width: ${({ theme }) => theme.rem(230)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.rem(280)};
    margin-bottom: 0;
    min-width: ${({ theme }) => theme.rem(180)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    height: ${({ theme }) => theme.rem(260)};
    margin-bottom: 0;
    min-width: ${({ theme }) => theme.rem(180)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXs}) {
    height: ${({ theme }) => theme.rem(320)};
  }

  &:hover ${StyledImage} {
    transform: scale(1.05);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      transform: scale(1);
    }
  }
`;

export const StyledLink = styled.a`
  color: inherit;
  display: block;
  height: 100%;
  position: relative;
  text-decoration: none;
`;

export const StyledContent = styled.div`
  min-height: ${({ theme }) => theme.rem(115)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: ${({ theme }) => theme.rem(140)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: ${({ theme }) => theme.rem(180)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXs}) {
    min-height: ${({ theme }) => theme.rem(100)};
  }
`;

export const StyledTitle = styled.div`
  font: ${({ theme }) => theme.rem(22)} ${({ theme }) => theme.fonts.fontBold};
  margin-bottom: ${({ theme }) => theme.rem(7)};
  padding: 0 ${({ theme }) => theme.rem(20)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.rem(10)};
    line-height: ${({ theme }) => theme.rem(50)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    font-size: ${({ theme }) => theme.rem(20)};
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.rem(9)};
    margin-top: ${({ theme }) => theme.rem(9)};
  }
`;

export const StyledFooter = styled.div`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.rem(47)};
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 0;
    justify-content: space-between;
    left: 0;
    margin-top: ${({ theme }) => theme.rem(5)};
    position: absolute;
    right: 0;
  }
`;

export const StyledPrice = styled.div`
  font: ${({ theme }) => `${theme.rem(25)} ${theme.fonts.fontMedium}`};
  padding-left: ${({ theme }) => theme.rem(20)};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: ${({ theme }) => theme.rem(10)};
  }
`;

export const StyledDesc = styled.div`
  color: #707171;
  font-size: ${({ theme }) => theme.rem(14)};
  margin-bottom: ${({ theme }) => theme.rem(3)};
  padding: 0 ${({ theme }) => theme.rem(40)};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.rem(20)};
  }

  &::before {
    background: #707171;
    border-radius: 50%;
    content: "";
    display: block;
    height: ${({ theme }) => theme.rem(7)};
    left: ${({ theme }) => theme.rem(20)};
    position: absolute;
    top: ${({ theme }) => theme.rem(8)};
    width: ${({ theme }) => theme.rem(7)};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: ${({ theme }) => theme.rem(9)};
      top: ${({ theme }) => theme.rem(6)};
    }
  }
`;

export const StyledText = styled.p``;

export const StyledAddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-bottom-left-radius: ${({ theme }) => theme.rem(5)};
  border-top-left-radius: ${({ theme }) => theme.rem(5)};
  color: white;
  cursor: pointer;
  display: inline-block;
  height: ${({ theme }) => theme.rem(45)};
  min-width: ${({ theme }) => theme.rem(64)};
  padding: 0 ${({ theme }) => theme.rem(20)};
  text-align: center;
  text-decoration: none;
  transition: all 0.1s ease-in;
  width: ${({ theme }) => theme.rem(64)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: ${({ theme }) => theme.rem(5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    height: ${({ theme }) => theme.rem(50)};
    min-width: ${({ theme }) => theme.rem(80)};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    min-width: ${({ theme }) => theme.rem(85)};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
      min-width: ${({ theme }) => theme.rem(90)};
    }
  }
`;

export const StyledLoader = styled.span`
  align-items: center;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-name: ${rotate};
  animation-timing-function: linear;
  color: ${({ theme }) => theme.colors.red};
  display: flex;
  height: ${({ theme }) => theme.rem(50)};
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 50%;
  transform-origin: center top;
  transform: translateY(-50%);
  width: ${({ theme }) => theme.rem(50)};
`;
