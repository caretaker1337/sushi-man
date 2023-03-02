import "styled-components";

import { TBreakpoints } from "./variables/breakpoints";
import { TColors } from "./variables/colors";
import { TFonts } from "./variables/fonts";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: TBreakpoints;
    colors: TColors;
    fonts: TFonts;
    rem: (px: number) => string;
  }
}
