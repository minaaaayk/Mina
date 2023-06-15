import { appWithTranslation } from "next-i18next";
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';
import { Color } from "../app/constants";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 10px;
    direction: ltr;
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

