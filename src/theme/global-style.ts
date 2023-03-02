import { base } from "./global/base";
import { reset } from "./global/reset";
import { slick } from "./global/slick";
import { notification } from './global/notification';
import { createGlobalStyle } from "~/theme";

const GlobalStyle = createGlobalStyle`
	${slick}
	${reset}
	${base}
	${notification}
`;

export { GlobalStyle };
