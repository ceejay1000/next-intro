import Document, { Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
      < Head >
        <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="A site for my projects" />
          <meta name="robots" content="noindex, nofollow"/>
        <title>Document</title>
      </Head>
      <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{
          `
          body {
            font-family: monospace;
          }
          `
        }</style>
      </html>
    )
  }
}

export default MyDocument;