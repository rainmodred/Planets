import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Barlow+Condensed&family=Bellefair&family=Spartan:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg bg-home">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
