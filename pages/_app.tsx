import { appWithTranslation } from "next-i18next";
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';
import { Breakpoint, Color } from "../app/constants";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    direction: ltr;
    
    font-size: 5px;
    @media (min-width: ${Breakpoint.xs}) {
      font-size: 6px;
    }
    @media (min-width: ${Breakpoint.sm}) {
      font-size: 7px;
    }
    @media (min-width: ${Breakpoint.lg}) {
      font-size: 8px;
    }
    @media (min-width: ${Breakpoint.xl}) {
      font-size: 9px;
    }
    @media (min-width: ${Breakpoint.xxl}) {
      font-size: 10px;
    }

  }
  html[lang^='fa'] {
    direction: rtl;
  }

  body {
    /* font-family: 'M PLUS Rounded 1c', sans-serif; */
    /* font-family: 'Vazirmatn', sans-serif; */
    font-family: 'Baloo Bhaijaan 2', cursive;
    color: ${Color.mainText};
    //TODO: add font family
    // part 3 (6:37)
  }
`


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);

