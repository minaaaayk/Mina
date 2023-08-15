import  Document,{ Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
class MyDocument extends Document {

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps }
  }
  
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html lang={locale}>
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <script src="https://kit.fontawesome.com/60810ea434.js" crossOrigin="anonymous" async></script>
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