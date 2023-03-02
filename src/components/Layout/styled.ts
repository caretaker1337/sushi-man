import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  overflow-x: hidden;
`;

export const StyledContent = styled.main``;

export const StyledContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(1300)};
  padding: 0 ${({ theme }) => theme.rem(10)};
`;
