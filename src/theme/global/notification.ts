import { css } from "~/theme";

const notification = css`
  .reapop {
    &__container {
      bottom: ${({ theme }) => theme.rem(20)};
      position: fixed;
      right: ${({ theme }) => theme.rem(20)};
      z-index: 999;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        bottom: ${({ theme }) => theme.rem(60)};
      }
    }

    &__notification {
      align-items: center;
      border-radius: ${({ theme }) => theme.rem(2)};
      box-shadow: 0 ${({ theme }) => theme.rem(3)}
        ${({ theme }) => theme.rem(6)} 0 rgba(0, 0, 0, 0.16);
      display: flex;
      justify-content: space-between;
      margin-bottom: ${({ theme }) => theme.rem(20)};
      padding: ${({ theme }) => theme.rem(20)} ${({ theme }) => theme.rem(30)};
      width: ${({ theme }) => theme.rem(480)};

      &--success {
        background-color: white;
      }

      &--error {
        background-color: red;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: ${({ theme }) => theme.rem(300)};
      }

      &-title {
        color: green;
        font-size: ${({ theme }) => theme.rem(18)};
        text-shadow: 0 0 ${({ theme }) => theme.rem(1)} rgba(0, 0, 0, 0.16);

        &:first-letter {
          text-transform: uppercase;
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
          font-size: ${({ theme }) => theme.rem(16)};
        }
      }

      &--error &-title {
        color: white;
      }

      &-meta {
        flex-grow: 1;
      }

      &-dismiss-icon {
        color: green;
        height: ${({ theme }) => theme.rem(15)};
        margin-right: ${({ theme }) => theme.rem(15)};
        width: ${({ theme }) => theme.rem(15)};

        &:last-of-type {
          cursor: pointer;
          margin-right: 0;
        }
      }

      &--error &-dismiss-icon {
        color: white;
      }
    }
  }
`;

export { notification };
