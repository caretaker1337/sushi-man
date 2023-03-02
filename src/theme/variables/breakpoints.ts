export interface TBreakpoints {
  desktop: string;
  tablet: string;
  mobile: string;
  mobileSm: string;
  mobileXs: string;
}

const breakpoints: TBreakpoints = {
  desktop: "1235px",
  tablet: "1023px",
  mobile: "767px",
  mobileSm: "500px",
  mobileXs: "389px",
};

export { breakpoints };
