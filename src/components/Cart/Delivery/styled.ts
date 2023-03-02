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
  grid-area: delivery;
  margin-bottom: ${({ theme }) => theme.rem(20)};
`;

export const StyledTitle = styled.h2`
  border-bottom: ${({ theme }) => `${theme.rem(3)} solid ${theme.colors.red}`};
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontBold}`};
  padding: ${({ theme }) => theme.rem(10)};
`;

export const StyledHeader = styled.div`
  display: flex;
  height: ${({ theme }) => theme.rem(60)};
  margin-bottom: ${({ theme }) => theme.rem(10)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const StyledContent = styled.div``;

export const StyledLayout = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(20)};
`;

export const StyledInputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(20)};
  position: relative;
  width: ${({ theme }) => theme.rem(400)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const StyledInput = styled.input<{ hasError: boolean }>`
  appearance: none;
  background-color: white;
  border-radius: 0;
  border: none;
  border-bottom: ${({ theme }) => `${theme.rem(2)} solid ${theme.colors.red}`};
  font: ${({ theme }) => `${theme.rem(16)} ${theme.fonts.fontMedium}`};
  height: ${({ theme }) => theme.rem(36)};
  padding: 0 ${({ theme }) => theme.rem(30)};
  width: 100%;

  &:focus {
    outline: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 ${({ theme }) => theme.rem(1000)} white inset;
  }

  &::-webkit-input-placeholder {
    color: ${({ theme, hasError }) =>
      hasError ? `${theme.colors.red}` : "rgb(118, 118, 118)"};
  }

  &:-moz-placeholder {
    color: ${({ theme, hasError }) =>
      hasError ? `${theme.colors.red}` : "rgb(118, 118, 118)"};
  }

  &::-moz-placeholder {
    color: ${({ theme, hasError }) =>
      hasError ? `${theme.colors.red}` : "rgb(118, 118, 118)"};
  }

  &:-ms-input-placeholder {
    color: ${({ theme, hasError }) =>
      hasError ? `${theme.colors.red}` : "rgb(118, 118, 118)"};
  }
`;

export const StyledInputIcon = styled.span<{ isSmall?: boolean }>`
  color: ${({ theme }) => theme.colors.red};
  display: block;
  left: ${({ isSmall, theme }) => (isSmall ? theme.rem(7) : theme.rem(5))};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ isSmall, theme }) => (isSmall ? theme.rem(16) : theme.rem(18))};
`;

export const StyledDeliveryInput = styled(StyledInput)`
  appearance: searchfield;

  &::-webkit-search-cancel-button {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E%3Cpath d='M0 0h24v24H0V0z' fill='none' /%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' fill='black' /%3E%3C/svg%3E");
    background-position: center center;
    background-size: 100% 100%;
    position: relative;
    top: ${({ theme }) => theme.rem(1)};
    height: ${({ theme }) => theme.rem(24)};
    width: ${({ theme }) => theme.rem(24)};
  }
`;

export const StyledInfo = styled.p`
  margin-top: ${({ theme }) => theme.rem(24)};
`;

export const StyledInfoIcon = styled.span`
  color: ${({ theme }) => theme.colors.red};
  display: inline-block;
  margin-left: ${({ theme }) => theme.rem(5)};
  margin-right: ${({ theme }) => theme.rem(7)};
  vertical-align: middle;
  width: ${({ theme }) => theme.rem(18)};
`;

export const StyledInfoLabel = styled.span`
  margin-right: ${({ theme }) => theme.rem(10)};
`;

export const StyledRadioWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-right: ${({ theme }) => theme.rem(30)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: ${({ theme }) => theme.rem(20)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    margin-right: ${({ theme }) => theme.rem(10)};
  }
`;

export const StyledRadioLabel = styled.label`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.fontMedium};
`;

export const StyledRadioLabelInfo = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.fontBold};
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
  margin-top: 0;
  margin-right: ${({ theme }) => theme.rem(10)};
  min-width: ${({ theme }) => theme.rem(25)};
  width: ${({ theme }) => theme.rem(25)};

  &:checked {
    background-position: center center;
  }
`;

export const StyledLink = styled.a`
  color: black;
  font-family: ${({ theme }) => theme.fonts.fontMedium};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const StyledMap = styled.div`
  box-shadow: 0 0 ${({ theme }) => theme.rem(5)} 0 rgba(0, 0, 0, 0.5);
  height: ${({ theme }) => theme.rem(200)};
  margin-bottom: ${({ theme }) => theme.rem(20)};
  margin-top: ${({ theme }) => theme.rem(20)};
  pointer-events: none;
`;

export const StyledLengthInKm = styled.p`
  display: inline-block;
  margin-left: ${({ theme }) => theme.rem(10)};
  position: absolute;
  left: calc(100% + ${({ theme }) => theme.rem(10)});
  top: ${({ theme }) => theme.rem(10)};
  white-space: nowrap;
`;

export const StyledCurrentLocationButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  height: ${({ theme }) => theme.rem(35)};
  margin-left: ${({ theme }) => theme.rem(10)};
  padding: 0;
  width: ${({ theme }) => theme.rem(35)};

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledDeliveryPrice = styled.p`
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};
  text-align: left;
  margin-right: ${({ theme }) => theme.rem(30)};
  width: ${({ theme }) => theme.rem(400)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: ${({ theme }) => theme.rem(15)};
  }
`;

export const StyledDeliveryError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};
  text-align: left;
  margin-right: ${({ theme }) => theme.rem(30)};
  width: ${({ theme }) => theme.rem(400)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: ${({ theme }) => theme.rem(15)};
  }
`;

export const StyledDeliveryPriceResult = styled.span`
  font-size: ${({ theme }) => theme.rem(16)};
`;

export const StyledErrorIcon = styled.span`
  color: ${({ theme }) => theme.colors.red};
  display: block;
  height: ${({ theme }) => theme.rem(20)};
  position: absolute;
  right: ${({ theme }) => theme.rem(-20)};
  top: 50%;
  transform: translateY(-50%);
  width: ${({ theme }) => theme.rem(20)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: 0;
  }
`;

export const StyledTerms = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.rem(30)};
  }
`;

export const StyledText = styled.p`
  font-family: ${({ theme }) => theme.fonts.fontMedium};
  margin-top: ${({ theme }) => theme.rem(12)};
  padding-left: ${({ theme }) => theme.rem(10)};
`;

export const StyledTextPrice = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.fontBold};
`;

export const StyledAddressLoader = styled.span`
  align-items: center;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-name: ${rotate};
  animation-timing-function: linear;
  color: ${({ theme }) => theme.colors.red};
  display: flex;
  height: ${({ theme }) => theme.rem(25)};
  justify-content: center;
  margin: auto;
  position: absolute;
  right: ${({ theme }) => theme.rem(10)};
  top: 50%;
  transform-origin: center top;
  width: ${({ theme }) => theme.rem(25)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: ${({ theme }) => theme.rem(40)};
  }
`;
