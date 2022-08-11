import { appWithTranslation } from "next-i18next";
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    /* font-family: 'M PLUS Rounded 1c', sans-serif; */
    /* font-family: 'Vazirmatn', sans-serif; */
    font-family: 'Baloo Bhaijaan 2', cursive;
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

