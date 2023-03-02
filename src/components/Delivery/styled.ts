import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  background: url("/images/delivery_bg.jpg") center center/cover no-repeat;
  padding: ${({ theme }) => `${theme.rem(90)} 0 ${theme.rem(50)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.rem(30)} 0 ${theme.rem(10)}`};
  }
`;

export const StyledLayout = styled.div`
  margin: 0 auto ${({ theme }) => theme.rem(40)};
  max-width: ${({ theme }) => theme.rem(1200)};
`;

export const StyledTitle = styled.h2`
  color: white;
  font: ${({ theme }) => `${theme.rem(42)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(10)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(28)};
    margin-bottom: ${({ theme }) => theme.rem(30)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    font-size: ${({ theme }) => theme.rem(30)};
  }
`;

export const StyledSubtitle = styled.p`
  color: white;
  font: ${({ theme }) => `${theme.rem(26)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(55)};
`;

export const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.rem(60)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    flex-direction: column;
    padding: 0 ${({ theme }) => theme.rem(20)};
  }
`;

export const StyledItem = styled.div`
  position: relative;

  &:last-of-type {
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 1 calc(33% - ${({ theme }) => theme.rem(10)});
    max-width: calc(33% - ${({ theme }) => theme.rem(10)});
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    margin-bottom: ${({ theme }) => theme.rem(40)};
    max-width: 100%;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    color: #56585a;
    content: attr(data-count);
    font-size: ${({ theme }) => theme.rem(150)};
    font-weight: bold;
    opacity: 0.7;
    position: absolute;
    top: ${({ theme }) => theme.rem(-55)};
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
      font-size: ${({ theme }) => theme.rem(80)};
      top: ${({ theme }) => theme.rem(-30)};
    }
  }
`;

export const StyledItemTitle = styled.p`
  color: white;
  font: ${({ theme }) => `${theme.rem(28)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(10)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(20)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    font-size: ${({ theme }) => theme.rem(24)};
  }
`;

export const StyledItemText = styled.p`
  color: #b0b2b1;
  font-size: ${({ theme }) => theme.rem(18)};
  line-height: 1.4;
`;
