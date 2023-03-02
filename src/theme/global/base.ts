import { css } from "~/theme";

const base = css`
  * {
    box-sizing: border-box;
  }

  #__next,
  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: ${({ theme }): number => theme.fonts.initialFontSize}px;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: ${({ theme }): string => theme.fonts.font};
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    height: 100%;
    width: 100%;
  }

  .gm-style-cc {
    display: none;
  }

  .pac-container:after {
    background-image: none;
    height: 0;
  }
`;

export { base };
