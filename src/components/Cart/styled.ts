import { keyframes, styled } from "~/theme";

const rotate = keyframes`
  from {
    transform: rotate(0deg) translateY(-50%);
  }

  to {
    transform: rotate(360deg) translateY(-50%);
  }
`;

export const StyledForm = styled.form`
  border-bottom: ${({ theme }) => `${theme.rem(4)} solid ${theme.colors.red}`};
  min-height: ${({ theme }) => theme.rem(310)};
  padding: ${({ theme }) =>
    `${theme.rem(30)} ${theme.rem(30)} ${theme.rem(50)}`};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 0;
    padding-right: 0;
    padding-top: ${({ theme }) => theme.rem(10)};
  }
`;

export const StyledLayout = styled.div`
  display: grid;
  grid-column-gap: ${({ theme }) => theme.rem(100)};
  grid-template-areas:
    "delivery persons"
    "delivery additionals"
    "delivery payment";
  grid-template-columns: calc(50% - ${({ theme }) => theme.rem(50)}) calc(
      50% - ${({ theme }) => theme.rem(50)}
    );
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column-gap: ${({ theme }) => theme.rem(40)};
    grid-template-columns: calc(50% - ${({ theme }) => theme.rem(20)}) calc(
        50% - ${({ theme }) => theme.rem(20)}
      );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-areas:
      "persons persons"
      "delivery delivery"
      "additionals additionals"
      "payment payment";
  }
`;

export const StyledTitle = styled.h2`
  border-bottom: ${({ theme }) => `${theme.rem(3)} solid ${theme.colors.red}`};
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(10)};
  padding: ${({ theme }) => theme.rem(10)};
`;

export const StyledTotal = styled.div`
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(22)};
  text-align: right;
`;

export const StyledEmpty = styled.p`
  align-items: center;
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => `${theme.rem(30)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(20)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(25)};
    margin-bottom: ${({ theme }) => theme.rem(20)};
  }
`;

export const StyledEmptyImage = styled.img`
  max-height: ${({ theme }) => theme.rem(240)};
`;

export const StyledButtons = styled.div`
  text-align: right;
`;

export const StyledBuy = styled.button<{ isLoading: boolean }>`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.rem(5)};
  border: none;
  box-shadow: 0 0 ${({ theme }) => theme.rem(10)} 0 rgba(0, 0, 0, 0.5);
  color: ${({ isLoading }) => (isLoading ? "transparent" : "white")};
  cursor: pointer;
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontMedium}`};
  height: ${({ theme }) => theme.rem(55)};
  line-height: ${({ theme }) => theme.rem(55)};
  min-width: ${({ theme }) => theme.rem(190)};
  padding: 0 ${({ theme }) => theme.rem(15)};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 0 0 ${({ theme }) => theme.rem(14)} 0 rgba(218, 38, 40, 0.75);
  }
`;

export const StyledBuyLoader = styled.span`
  align-items: center;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-name: ${rotate};
  animation-timing-function: linear;
  color: white;
  display: flex;
  height: ${({ theme }) => theme.rem(30)};
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 50%;
  transform-origin: center top;
  width: ${({ theme }) => theme.rem(30)};
`;

export const StyledCheckbox = styled.input`
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
  margin: 0 ${({ theme }) => theme.rem(10)} 0 0;
  min-width: ${({ theme }) => theme.rem(25)};
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  width: ${({ theme }) => theme.rem(25)};

  &:checked {
    background-position: center center;
  }
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  font: ${({ theme }) => `${theme.rem(14)} ${theme.fonts.font}`};
  user-select: none;
`;

export const StyledLabelLink = styled.a`
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledAgree = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.rem(25)};
  position: relative;
`;

export const StyledErrorIcon = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.red};
  height: ${({ theme }) => theme.rem(20)};
  margin-right: ${({ theme }) => theme.rem(5)};
  margin-top: ${({ theme }) => theme.rem(-7)};
  width: ${({ theme }) => theme.rem(20)};
`;

export const StyledMainPageLink = styled.a`
  background-color: ${({ theme }) => theme.colors.red};
  box-shadow: 0 0 ${({ theme }) => theme.rem(10)} 0 rgba(0, 0, 0, 0.5);
  border-radius: ${({ theme }) => theme.rem(5)};
  color: white;
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontMedium}`};
  height: ${({ theme }) => theme.rem(55)};
  line-height: ${({ theme }) => theme.rem(55)};
  margin-top: ${({ theme }) => theme.rem(20)};
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

  &:hover {
    box-shadow: 0 0 ${({ theme }) => theme.rem(14)} 0 rgba(218, 38, 40, 0.75);
  }
`;
