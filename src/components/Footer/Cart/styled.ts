import { keyframes, styled } from "~/theme";

const cartShake = keyframes`
  0% {
    transform: translateY(0);
  } 

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const StyledWrapper = styled.div<{ productsChanged: boolean }>`
  animation-duration: 0.3s;
  animation-iteration-count: 2;
  animation-name: ${({ productsChanged }) =>
    productsChanged ? cartShake : "none"};
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 50%;
  border: ${({ theme }) => theme.rem(3)} solid white;
  bottom: ${({ theme }) => theme.rem(15)};
  box-shadow: 0 0 0px ${({ theme }) => `${theme.rem(3)} ${theme.colors.red}`};
  display: none;
  height: ${({ theme }) => theme.rem(70)};
  padding: ${({ theme }) => theme.rem(5)};
  position: fixed;
  right: ${({ theme }) => theme.rem(15)};
  text-align: center;
  width: ${({ theme }) => theme.rem(70)};
  z-index: 101;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    height: ${({ theme }) => theme.rem(55)};
    width: ${({ theme }) => theme.rem(55)};
  }
`;

export const StyledLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StyledAmount = styled.p`
  background-color: white;
  border-radius: 50%;
  bottom: ${({ theme }) => theme.rem(-5)};
  color: black;
  font: ${({ theme }) => `${theme.rem(16)} ${theme.fonts.fontBold}`};
  height: ${({ theme }) => theme.rem(21)};
  line-height: ${({ theme }) => theme.rem(21)};
  min-width: ${({ theme }) => theme.rem(22)};
  padding: 0 ${({ theme }) => theme.rem(2)};
  position: absolute;
  right: ${({ theme }) => theme.rem(-5)};
  text-align: center;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    font-size: ${({ theme }) => theme.rem(14)};
    padding: ${({ theme }) => theme.rem(2)};
    min-width: ${({ theme }) => theme.rem(20)};
  }
`;

export const StyledSvgSymbol = styled.svg`
  height: ${({ theme }) => theme.rem(35)};
  width: ${({ theme }) => theme.rem(35)};
`;
