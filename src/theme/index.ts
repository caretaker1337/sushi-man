import styled, {
  createGlobalStyle,
  css,
  keyframes,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";

import { breakpoints } from "./variables/breakpoints";
import { colors } from "./variables/colors";
import { fonts } from "./variables/fonts";

const theme: DefaultTheme = {
  breakpoints,
  colors,
  fonts,
  rem: (px: number) => {
    const baseFontSize = fonts.initialFontSize;

    return `${px / baseFontSize}rem`;
  },
};

export { createGlobalStyle, css, keyframes, styled, theme, ThemeProvider };
