import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  grid-area: additionals;
  margin-bottom: ${({ theme }) => theme.rem(40)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.rem(20)};
    min-height: 0;
  }
`;

export const StyledLayout = styled.div``;

export const StyledContent = styled.div``;

export const StyledTitle = styled.h2`
  border-bottom: ${({ theme }) => `${theme.rem(3)} solid ${theme.colors.red}`};
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontBold}`};
  padding: ${({ theme }) => theme.rem(10)};
  text-align: left;
  width: 100%;
`;

export const StyledTable = styled.table`
  margin-bottom: ${({ theme }) => theme.rem(20)};
  min-height: ${({ theme }) => theme.rem(220)};
  table-layout: fixed;
  text-align: left;
`;

export const StyledTableRow = styled.tr``;

export const StyledTableCell = styled.td`
  padding: ${({ theme }) => theme.rem(10)};
  vertical-align: middle;
  width: 33.3333%;
`;

export const StyledName = styled.span`
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXs}) {
    font-size: ${({ theme }) => theme.rem(16)};
  }
`;

export const StyledPrice = styled.span`
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontBold}`};
`;

export const StyledQuantityWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  position: relative;
  margin-right: ${({ theme }) => theme.rem(15)};
`;

export const StyledQuantity = styled.p`
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};
  height: ${({ theme }) => theme.rem(24)};
  line-height: ${({ theme }) => theme.rem(24)};
  text-align: center;
  vertical-align: middle;
  width: ${({ theme }) => theme.rem(50)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    line-height: ${({ theme }) => theme.rem(26)};
  }
`;

export const StyledQuantityButton = styled.button<{
  isIncrease?: boolean;
  isDecrease?: boolean;
}>`
  align-items: center;
  background: none;
  border-radius: 50%;
  border: ${({ theme }) => theme.rem(2)} solid black;
  color: black;
  cursor: pointer;
  display: flex;
  height: ${({ theme }) => theme.rem(22)};
  justify-content: center;
  padding: 0;
  width: ${({ theme }) => theme.rem(22)};

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledNoteWrapper = styled.div`
  /* margin-bottom: ${({ theme }) => theme.rem(30)}; */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.rem(30)};
  }
`;

export const StyledNoteContent = styled.div`
  position: relative;
`;

export const StyledNoteIcon = styled.i`
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  display: block;
  top: ${({ theme }) => theme.rem(1)};
  width: ${({ theme }) => theme.rem(30)};
`;

export const StyledNoteLabel = styled.p`
  border-bottom: ${({ theme }) => `${theme.rem(3)} solid ${theme.colors.red}`};
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(20)};
  padding: ${({ theme }) => theme.rem(10)};
`;

export const StyledNote = styled.textarea`
  border: none;
  border-bottom: ${({ theme }) => `${theme.rem(2)} solid ${theme.colors.red}`};
  border-radius: 0;
  display: block;
  font: ${({ theme }) => `${theme.rem(16)} ${theme.fonts.fontMedium}`};
  height: ${({ theme }) => theme.rem(60)};
  margin-bottom: ${({ theme }) => theme.rem(30)};
  padding: ${({ theme }) => `${theme.rem(5)} ${theme.rem(40)}`};
  resize: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const StyledPromo = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.rem(20)};
  position: relative;
`;

export const StyledPromoInput = styled.input`
  appearance: none;
  background-color: white;
  background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23da2628' d='M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z'%3E%3C/path%3E%3C/svg%3E");
  background-position: ${({ theme }) => theme.rem(5)} center;
  background-repeat: no-repeat;
  background-size: auto ${({ theme }) => theme.rem(20)};
  border-radius: 0;
  border: none;
  border-bottom: ${({ theme }) => `${theme.rem(2)} solid ${theme.colors.red}`};
  font: ${({ theme }) => `${theme.rem(16)} ${theme.fonts.fontMedium}`};
  height: ${({ theme }) => theme.rem(35)};
  margin-right: ${({ theme }) => theme.rem(20)};
  padding: 0 ${({ theme }) => theme.rem(30)};
  width: calc(100% - ${({ theme }) => theme.rem(150)});

  &:focus {
    outline: none;
  }
`;

export const StyledPromoSuccess = styled.span`
  color: green;
  display: block;
  height: ${({ theme }) => theme.rem(25)};
  left: calc(100% - ${({ theme }) => theme.rem(180)});
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ theme }) => theme.rem(25)};
`;

export const StyledPromoError = styled.span`
  color: ${({ theme }) => theme.colors.red};
  display: block;
  height: ${({ theme }) => theme.rem(25)};
  left: calc(100% - ${({ theme }) => theme.rem(180)});
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ theme }) => theme.rem(25)};
`;

export const StyledPromoButton = styled.button<{ isActivated: boolean }>`
  background-color: ${({ isActivated, theme }) =>
    isActivated ? "green" : theme.colors.red};
  box-shadow: 0 0
    ${({ isActivated, theme }) =>
      `${theme.rem(10)} 0 ${isActivated ? "green" : "rgba(0, 0, 0, 0.5)"}`};
  border: 0;
  border-radius: ${({ theme }) => theme.rem(5)};
  color: white;
  cursor: pointer;
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontMedium}`};
  height: ${({ theme }) => theme.rem(35)};
  line-height: ${({ theme }) => theme.rem(35)};
  min-width: ${({ theme }) => theme.rem(120)};
  padding: 0 ${({ theme }) => theme.rem(10)};
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in;

  &:hover {
    box-shadow: 0 0
      ${({ isActivated, theme }) =>
        `${theme.rem(14)} 0 ${
          isActivated ? "green" : "rgba(218, 38, 40, 0.75)"
        }`};
  }
`;
