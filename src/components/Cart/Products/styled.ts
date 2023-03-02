import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(30)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.rem(15)};
  }
`;

export const StyledTitle = styled.h2`
  border-bottom: ${({ theme }) => `${theme.rem(3)} solid ${theme.colors.red}`};
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontBold}`};
  padding: ${({ theme }) => theme.rem(10)};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.rem(15)};
  }
`;

export const StyledContent = styled.div``;

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-areas: "image name quantity options";

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border: ${({ theme }) => theme.rem(1)} solid rgb(239, 239, 239);
    border-radius: ${({ theme }) => theme.rem(7)};
    box-shadow: 0 0 ${({ theme }) => theme.rem(5)} 0 rgba(0, 0, 0, 0.5);
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "image name"
      "quantity options";
    margin-bottom: ${({ theme }) => theme.rem(15)};
  }
`;

const StyledCell = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.rem(10)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: ${({ theme }) => theme.rem(15)};
    padding-top: ${({ theme }) => theme.rem(15)};
  }
`;

export const StyledImageArea = styled(StyledCell)`
  grid-area: image;
`;

export const StyledNameArea = styled(StyledCell)`
  flex-direction: column;
  grid-area: name;
  text-align: center;
`;

export const StyledQuantityArea = styled(StyledCell)`
  grid-area: quantity;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-color: rgb(239, 239, 239);
  }
`;

export const StyledOptionsArea = styled(StyledCell)`
  align-items: center;
  display: flex;
  grid-area: options;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-color: rgb(239, 239, 239);
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledImage = styled.img`
  border-radius: ${({ theme }) => theme.rem(10)};
  box-shadow: 0 0 ${({ theme }) => theme.rem(10)} 0 rgba(0, 0, 0, 0.5);
  display: block;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  width: ${({ theme }) => theme.rem(75)};
`;

export const StyledLink = styled.a`
  color: black;
  font-family: ${({ theme }) => theme.fonts.fontMedium};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const StyledBold = styled.p`
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};
`;

export const StyledWeight = styled.p`
  margin-bottom: ${({ theme }) => theme.rem(10)};
`;

export const StyledQuantityWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  margin-right: ${({ theme }) => theme.rem(15)};
`;

export const StyledQuantity = styled.p`
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};
  height: ${({ theme }) => theme.rem(25)};
  line-height: ${({ theme }) => theme.rem(25)};
  text-align: center;
  user-select: none;
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

export const StyledPrice = styled.span`
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontBold}`};
  margin-right: ${({ theme }) => theme.rem(30)};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 0;
  }
`;

export const StyledRemove = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  font-size: ${({ theme }) => theme.rem(16)};

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledModifiersList = styled.ul``;

export const StyledModifiersItem = styled.li`
  font-size: ${({ theme }) => theme.rem(14)};
`;

export const StyledText = styled.p`
  font: ${({ theme }) => `${theme.rem(16)} ${theme.fonts.fontMedium}`};
  margin-bottom: ${({ theme }) => theme.rem(10)};
  padding-left: ${({ theme }) => theme.rem(10)};
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.rem(15)};
  }
`;

export const StyledTextLabel = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.fontBold};
`;
