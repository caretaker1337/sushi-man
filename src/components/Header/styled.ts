import { css, styled } from "~/theme";

export const StyledHeader = styled.header`
  height: ${({ theme }) => theme.rem(125)};
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ theme }) => theme.rem(100)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    height: ${({ theme }) => theme.rem(120)};
  }
`;

export const StyledLayout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

export const StyledContent = styled(StyledLayout)<{
  isOpened: boolean;
}>`
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background: url("/images/products_bg.jpg") center center/cover no-repeat;
    bottom: 0;
    flex-direction: column-reverse;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    justify-content: center;
    top: 0;
    transition: visibility 0.2s ease-in, opacity 0.2s ease-in;
    visibility: hidden;
    z-index: 10;

    ${({ isOpened }) =>
      isOpened &&
      css`
        opacity: 1;
        visibility: visible;
      `};
  }
`;

export const StyledButton = styled.button<{ isOpened: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  height: ${({ theme }) => theme.rem(35)};
  justify-content: space-between;
  padding: 0;
  position: absolute;
  right: ${({ theme }) => theme.rem(20)};
  top: ${({ theme }) => theme.rem(20)};
  transition: transform 330ms ease-out;
  width: ${({ theme }) => theme.rem(35)};
  transform: ${({ isOpened }) =>
    isOpened ? "rotate(-45deg)" : "rotate(0deg)"};
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const StyledButtonHelper = styled.span<{
  isOpened: boolean;
  isLeft?: boolean;
  isRight?: boolean;
  isHalf?: boolean;
}>`
  align-self: ${({ isRight }) => (isRight ? "flex-end" : "auto")};
  background-color: ${({ isOpened, theme }) =>
    isOpened ? theme.colors.red : "black"};
  border-radius: ${({ theme }) => theme.rem(5)};
  height: ${({ theme }) => theme.rem(4)};
  opacity: 0.7;
  width: ${({ isHalf }) => (isHalf ? "50%" : "100%")};
  transform: ${({ isOpened, isRight, isLeft }) =>
    isOpened && isLeft
      ? "rotate(-90deg) translateX(3px)"
      : isOpened && isRight
      ? "rotate(-90deg) translateX(-3px)"
      : "none"};
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: ${({ isLeft, isRight }) =>
    isLeft ? "right" : isRight ? "left" : "none"};
  will-change: transform;
`;
