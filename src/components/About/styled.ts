import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  background: url("/images/about_bg.jpg") center center/cover no-repeat;
  border-top: ${({ theme }) => `${theme.rem(3)} solid ${theme.colors.red}`};
  min-height: ${({ theme }) => theme.rem(400)};
  padding: ${({ theme }) => theme.rem(50)} 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 0;
    padding: ${({ theme }) => theme.rem(25)} 0;
  }
`;

export const StyledTitle = styled.h2`
  font: ${({ theme }) => `${theme.rem(40)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(30)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(25)};
    margin-bottom: ${({ theme }) => theme.rem(20)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    margin-bottom: ${({ theme }) => theme.rem(10)};
  }
`;

export const StyledText = styled.div`
  font-size: ${({ theme }) => theme.rem(20)};
  letter-spacing: ${({ theme }) => theme.rem(1)};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(700)};
  text-rendering: optimizeLegibility;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(16)};
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    letter-spacing: 0;
    max-width: 100%;
  }

  & > *,
  & > p {
    margin-bottom: ${({ theme }) => theme.rem(20)};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: ${({ theme }) => theme.rem(15)};
    }
  }
`;
