import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    @font-face {
      font-family: manrope;
      src: url('../../css/fonts/manrope-variablefont_wght-webfont.woff2') format('woff2'),
           url('../../css/fonts/manrope-variablefont_wght-webfont.woff2') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    *{
      font-family: manrope;
      line-height: 1;
    }

    a {
      text-decoration: none;
    }
`;
