import Image from "next/image";

import { css, keyframes, styled } from "~/theme";

const rotate = keyframes`
  from {
    transform: rotate(0deg) translateY(-50%);
  }

  to {
    transform: rotate(360deg) translateY(-50%);
  }
`;

export const StyledWrapper = styled.div`
  background-image: url("/images/products_bg.jpg");
  background-size: 33.3333% auto;
  border-bottom: ${({ theme }) => `${theme.rem(4)} solid ${theme.colors.red}`};
  overflow: hidden;
  padding: ${({ theme }) => theme.rem(50)} 0 ${({ theme }) => theme.rem(100)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: ${({ theme }) => theme.rem(50)};
    padding-top: ${({ theme }) => theme.rem(20)};
  }
`;

export const StyledLayout = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(1200)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const StyledContentColumn = styled.div`
  margin: 0 ${({ theme }) => theme.rem(20)};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: ${({ theme }) => theme.rem(10)};
    margin-right: ${({ theme }) => theme.rem(10)};
  }
`;

export const StyledContentLeft = styled(StyledContentColumn)`
  flex: 0 1 35%;
  max-width: 35%;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 1 auto;
    margin-bottom: ${({ theme }) => theme.rem(30)};
    max-width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    max-width: 100%;
  }
`;

export const StyledContentRight = styled(StyledContentColumn)`
  flex: 0 1 65%;
  max-width: 65%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 1 auto;
    max-width: 100%;
  }
`;

export const StyledImageHolder = styled.div`
  box-shadow: 0 0 ${({ theme }) => theme.rem(10)} 0 rgba(0, 0, 0, 0.5);
  border-radius: ${({ theme }) => theme.rem(15)};
  min-height: ${({ theme }) => theme.rem(400)};
  overflow: hidden;
  position: relative;
`;

export const StyledImage = styled(Image)``;

export const StyledContent = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(40)};
`;

export const StyledTitle = styled.h2`
  font: ${({ theme }) => `${theme.rem(40)} ${theme.fonts.fontMedium}`};
  margin-bottom: ${({ theme }) => theme.rem(20)};
`;

export const StyledItem = styled.p`
  margin-bottom: ${({ theme }) => theme.rem(15)};
  max-width: ${({ theme }) => theme.rem(450)};
`;

export const StyledItemPrice = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font: ${({ theme }) => `${theme.rem(23)} ${theme.fonts.fontMedium}`};
  margin-bottom: ${({ theme }) => theme.rem(20)};
`;

export const StyledItemSecondary = styled.p`
  font-size: ${({ theme }) => theme.rem(14)};
  margin-bottom: ${({ theme }) => theme.rem(15)};
`;

export const StyledItemTitle = styled.span`
  color: black;
  font: ${({ theme }) => `${theme.rem(17)} ${theme.fonts.fontMedium}`};
  margin-right: ${({ theme }) => theme.rem(10)};
`;

export const StyledModifiers = styled.div``;

export const StyledModifiersList = styled.ul``;

export const StyledModifiersItem = styled.li`
  margin-bottom: ${({ theme }) => theme.rem(5)};
  user-select: none;
`;

export const StyledModifierLabel = styled.label`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.fontMedium};
  vertical-align: ${({ theme }) => theme.rem(-1)};
`;

export const StyledModifierPrice = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const StyledMofifiersCheckbox = styled.input<{ isSecondary?: boolean }>`
  appearance: none;
  background-image: url("data:image/svg+xml,%0A%3Csvg aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23da2628' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E%0A");
  background-position: ${({ theme }) => `${theme.rem(-50)} center`};
  background-repeat: no-repeat;
  background-size: ${({ theme }) => `${theme.rem(17)} ${theme.rem(17)}`};
  border-radius: 50%;
  border: ${({ theme }) => `${theme.rem(2)} solid ${theme.colors.red}`};
  cursor: pointer;
  display: inline-block;
  height: ${({ theme }) => theme.rem(25)};
  margin-left: 0;
  margin-right: ${({ theme }) => theme.rem(10)};
  margin-top: 0;
  overflow: hidden;
  vertical-align: middle;
  width: ${({ theme }) => theme.rem(25)};

  ${({ isSecondary }) =>
    isSecondary &&
    css`
      background-size: ${({ theme }) => `${theme.rem(13)} ${theme.rem(13)}`};
      height: ${({ theme }) => theme.rem(20)};
      width: ${({ theme }) => theme.rem(20)};
    `}

  &:checked {
    background-position: center center;
  }
`;

export const StyledSubmodifiersList = styled.ul`
  margin-bottom: ${({ theme }) => theme.rem(10)};
  margin-left: ${({ theme }) => theme.rem(20)};
  margin-top: ${({ theme }) => theme.rem(5)};
`;

export const StyledSubmodifiersItem = styled.li`
  margin-bottom: ${({ theme }) => theme.rem(6)};
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: ${({ theme }) => theme.rem(5)};
  box-shadow: 0 0 ${({ theme }) => theme.rem(10)} 0 rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontMedium}`};
  height: ${({ theme }) => theme.rem(55)};
  line-height: ${({ theme }) => theme.rem(55)};
  min-width: ${({ theme }) => theme.rem(190)};
  padding: 0 ${({ theme }) => theme.rem(15)};
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(16)};
    height: ${({ theme }) => theme.rem(45)};
    line-height: ${({ theme }) => theme.rem(45)};
    min-width: ${({ theme }) => theme.rem(140)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: static;
  }

  &:hover {
    box-shadow: 0 0 ${({ theme }) => theme.rem(14)} 0 rgba(218, 38, 40, 0.75);
  }
`;

export const StyledImageLoader = styled.span`
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
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 50%;
  transform-origin: center top;
  width: ${({ theme }) => theme.rem(50)};
`;
