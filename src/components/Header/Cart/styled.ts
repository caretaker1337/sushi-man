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
  animation-timing-function: linear;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 50%;
  border: ${({ theme }) => theme.rem(3)} solid white;
  box-shadow: 0 0 0px ${({ theme }) => `${theme.rem(3)} ${theme.colors.red}`};
  display: flex;
  height: ${({ theme }) => theme.rem(70)};
  margin-left: ${({ theme }) => theme.rem(70)};
  outline: ${({ theme }) => `${theme.rem(3)} solid ${theme.colors.red}`};
  padding: ${({ theme }) => theme.rem(5)};
  position: fixed;
  right: ${({ theme }) => theme.rem(30)};
  text-align: center;
  top: ${({ theme }) => theme.rem(24)};
  width: ${({ theme }) => theme.rem(70)};
  z-index: 101;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const StyledLink = styled.a`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const StyledIcon = styled.i`
  display: block;
  height: ${({ theme }) => theme.rem(35)};
  width: ${({ theme }) => theme.rem(35)};
`;

export const StyledAmount = styled.div`
  background-color: white;
  border-radius: 50%;
  bottom: ${({ theme }) => theme.rem(-5)};
  color: black;
  font: ${({ theme }) => `${theme.rem(16)} ${theme.fonts.fontBold}`};
  min-width: ${({ theme }) => theme.rem(25)};
  padding: ${({ theme }) => theme.rem(3)};
  position: absolute;
  right: ${({ theme }) => theme.rem(-5)};
  text-align: center;
  user-select: none;
`;
