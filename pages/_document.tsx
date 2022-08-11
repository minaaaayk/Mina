import { AppType } from 'next/dist/shared/lib/utils'
import { Html, Head, Main, NextScript, DocumentProps, DocumentContext, DocumentInitialProps } from 'next/document'

function Document(props: DocumentProps) {
  return (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;500;600;700;800&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
export default Document;