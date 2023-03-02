import { css, styled } from "~/theme";

export const StyledWrapper = styled.div`
  grid-area: payment;
  margin-bottom: ${({ theme }) => theme.rem(40)};
`;

export const StyledTitle = styled.h2`
  border-bottom: ${({ theme }) => `${theme.rem(3)} solid ${theme.colors.red}`};
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontBold}`};
  padding: ${({ theme }) => theme.rem(10)};
  margin-bottom: ${({ theme }) => theme.rem(15)};
`;

export const StyledContent = styled.div``;

export const StyledImageHolder = styled.div`
  display: flex;
`;

export const StyledImage = styled.img`
  display: inline-block;
  height: ${({ theme }) => theme.rem(35)};
  margin-right: ${({ theme }) => theme.rem(2)};
  width: auto;
`;

export const StyledRow = styled.div<{ isHidden?: boolean }>`
  margin-bottom: ${({ theme }) => theme.rem(15)};

  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `}
`;

export const StyledRadioWrapper = styled.div`
  display: flex;
  margin-right: ${({ theme }) => theme.rem(30)};
`;

export const StyledRadio = styled.input`
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
  margin-right: ${({ theme }) => theme.rem(10)};
  margin-top: ${({ theme }) => theme.rem(1)};
  min-width: ${({ theme }) => theme.rem(25)};
  width: ${({ theme }) => theme.rem(25)};

  &:checked {
    background-position: center center;
  }
`;

export const StyledRadioLabel = styled.label`
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.rem(4)};
`;

export const StyledRadioLabelText = styled.span`
  font-family: ${({ theme }) => theme.fonts.fontMedium};
  margin-bottom: ${({ theme }) => theme.rem(10)};
`;
