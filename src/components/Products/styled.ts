import { css, keyframes, styled } from "~/theme";

const rotate = keyframes`
  from {
    transform: rotate(0deg) translateY(-50%);
  }

  to {
    transform: rotate(360deg) translateY(-50%);
  }
`;

export const StyledWrapper = styled.section`
  background-image: url("/images/products_bg.jpg");
  background-size: 33.3333% auto;
  min-height: ${({ theme }) => theme.rem(300)};
  padding: ${({ theme }) => theme.rem(60)} 0 ${({ theme }) => theme.rem(30)};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ theme }) => theme.rem(30)};
  }
`;

export const StyledTitle = styled.h2<{ inner: boolean }>`
  font: ${({ inner, theme }) => (inner ? theme.rem(40) : theme.rem(48))}
    ${({ theme }) => theme.fonts.fontBold};
  margin-bottom: ${({ theme }) => theme.rem(15)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(25)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: ${({ theme }) => theme.rem(10)};
    padding-right: ${({ theme }) => theme.rem(10)};
  }
`;

export const StyledLayout = styled.div`
  margin: 0 auto ${({ theme }) => theme.rem(40)};
  max-width: ${({ theme }) => theme.rem(1200)};
`;

export const StyledTabs = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(20)};
  min-height: ${({ theme }) => theme.rem(440)};
`;

export const StyledPanel = styled.div``;

export const StyledTabsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.rem(20)};
  margin-left: ${({ theme }) => theme.rem(-10)};
  margin-right: ${({ theme }) => theme.rem(-10)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: ${({ theme }) => theme.rem(-5)};
    margin-right: ${({ theme }) => theme.rem(-5)};
  }
`;

export const StyledTab = styled.div<{
  isActive: boolean;
  isCollapsed: boolean;
  isRoll: boolean;
  isSet: boolean;
  isStarter: boolean;
  isPoke: boolean;
  isDrink: boolean;
  isCaviar: boolean;
}>`
  background-position-x: ${({ theme }) => theme.rem(-1)};
  background-repeat: no-repeat;
  background-size: calc(100% + ${({ theme }) => theme.rem(2)}) auto;
  border-radius: ${({ theme }) => theme.rem(15)};
  box-shadow: 0 0 ${({ theme }) => theme.rem(10)} 0 rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
  flex: 0 1
    calc(
      ${({ isCollapsed }) => (isCollapsed ? "20%" : "33.3333%")} -
        ${({ theme }) => theme.rem(20)}
    );
  font: ${({ theme }) => `${theme.rem(26)} ${theme.fonts.fontBold}`};
  height: ${({ isCollapsed, theme }) =>
    isCollapsed ? theme.rem(70) : theme.rem(200)};
  margin: ${({ theme }) => `0 ${theme.rem(10)} ${theme.rem(20)}`};
  opacity: ${({ isCollapsed }) => (isCollapsed ? "0.7" : 1)};
  overflow: hidden;
  padding: ${({ theme }) => `${theme.rem(20)} 0 0 ${theme.rem(20)}`};
  transition: background-position 0.3s linear, background-size 0.3s linear,
    height 0.3s linear;
  will-change: background-position, background-position-y, background-size,
    height;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 1 calc(50% - ${({ theme }) => theme.rem(10)});
    margin: ${({ theme }) => `0 ${theme.rem(5)} ${theme.rem(10)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 1 calc(100% - ${({ theme }) => theme.rem(10)});
  }

  &:hover {
    background-position-x: ${({ theme }) => theme.rem(-10)};
    background-size: calc(100% + ${({ theme }) => theme.rem(10)}) auto;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
    `}

  ${({ isCollapsed, isRoll }) =>
    isRoll &&
    css`
      background-image: url("/images/rolls_bg.jpg");
      background-position-y: ${({ theme }) =>
        isCollapsed ? theme.rem(-200) : theme.rem(-280)};
    `}

  ${({ isCollapsed, isStarter }) =>
    isStarter &&
    css`
      background-image: url("/images/starters_bg.jpg");
      background-position-y: ${({ theme }) =>
        isCollapsed ? theme.rem(-200) : theme.rem(-220)};
    `}


  ${({ isSet }) =>
    isSet &&
    css`
      background-image: url("/images/sets_bg.jpg");
      background-position-y: ${({ theme }) => theme.rem(-140)};
    `}

  ${({ isPoke }) =>
    isPoke &&
    css`
      background-image: url("/images/poke_bg.jpg");
      background-position-y: ${({ theme }) => theme.rem(-70)};
    `}

  ${({ isDrink }) =>
    isDrink &&
    css`
      background-image: url("/images/drinks_bg.jpg");
      background-position-y: ${({ theme }) => theme.rem(-180)};
    `}

    ${({ isCaviar }) =>
    isCaviar &&
    css`
      background-image: url("/images/caviar_bg.jpg");
      background-position-y: ${({ theme }) => theme.rem(-180)};
    `}
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ theme }) => theme.rem(-10)};
  margin-right: ${({ theme }) => theme.rem(-10)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: ${({ theme }) => theme.rem(-5)};
    margin-right: ${({ theme }) => theme.rem(-5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: ${({ theme }) => theme.rem(-5)};
    margin-right: ${({ theme }) => theme.rem(-5)};
  }
`;

export const StyledLoader = styled.span<{ iscollapsed: boolean }>`
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
  top: ${({ iscollapsed, theme }) =>
    iscollapsed ? theme.rem(300) : theme.rem(350)};
  transform-origin: center top;
  width: ${({ theme }) => theme.rem(50)};
`;
