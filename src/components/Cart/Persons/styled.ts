import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  grid-area: persons;
  margin-bottom: ${({ theme }) => theme.rem(20)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.rem(20)};
  }
`;

export const StyledTitle = styled.h2`
  border-bottom: ${({ theme }) => `${theme.rem(3)} solid ${theme.colors.red}`};
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontBold}`};
  padding: ${({ theme }) => theme.rem(10)};
`;

export const StyledTable = styled.table`
  margin-bottom: ${({ theme }) => theme.rem(20)};
  table-layout: fixed;
  text-align: left;
  min-width: ${({ theme }) => theme.rem(475)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}) {
    min-width: 100%;
  }
`;

export const StyledTableRow = styled.tr``;

export const StyledTableCell = styled.td<{ hasError?: boolean }>`
  color: ${({ hasError, theme }) => (hasError ? theme.colors.red : "black")};
  padding: ${({ theme }) => theme.rem(10)};
  position: relative;
  vertical-align: middle;
  width: 33.3333%;
`;

export const StyledName = styled.span<{ hasError: boolean }>`
  color: ${({ hasError, theme }) => (hasError ? theme.colors.red : "black")};
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};
`;

export const StyledPrice = styled.span`
  color: black;
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};
`;

export const StyledQuantityWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  position: relative;
`;

export const StyledQuantity = styled.p`
  color: inherit;
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};
  height: ${({ theme }) => theme.rem(25)};
  line-height: ${({ theme }) => theme.rem(25)};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  width: ${({ theme }) => theme.rem(50)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    line-height: ${({ theme }) => theme.rem(26)};
  }
`;

export const StyledQuantityButton = styled.button<{
  isIncrease?: boolean;
  isDecrease?: boolean;
  hasError: boolean;
}>`
  align-items: center;
  background: none;
  border-radius: 50%;
  border: ${({ hasError, theme }) =>
    `${theme.rem(2)} solid ${hasError ? theme.colors.red : "black"}`};
  color: inherit;
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

export const StyledError = styled.span`
  color: ${({ theme }) => theme.colors.red};
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.fontBold};
  height: ${({ theme }) => theme.rem(20)};
  left: -${({ theme }) => theme.rem(25)};
  margin-left: ${({ theme }) => theme.rem(10)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ theme }) => theme.rem(20)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
    margin-right: ${({ theme }) => theme.rem(10)};
    position: static;
    transform: none;
    vertical-align: ${({ theme }) => theme.rem(-3)};
  }
`;
