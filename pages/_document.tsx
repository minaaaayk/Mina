import  Document,{ Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
class MyDocument extends Document {

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  
  render() {
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
      );
  }
}

export default MyDocument;