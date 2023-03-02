import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  flex-grow: 1;
  margin-right: ${({ theme }) => theme.rem(30)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-grow: 0;
    margin-bottom: ${({ theme }) => theme.rem(20)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.rem(30)};
  }
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

export const StyledItem = styled.li`
  margin-right: ${({ theme }) => theme.rem(20)};

  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledLink = styled.span<{
  isActive: boolean;
}>`
  color: ${({ isActive }) => (isActive ? "black" : "white")};
  cursor: pointer;
  font-size: ${({ theme }) => theme.rem(23)};
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.1s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.rem(18)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.rem(28)};
  }

  &:hover {
    color: black;
  }
`;
