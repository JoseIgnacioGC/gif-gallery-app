import { Html, Head, Main, NextScript } from 'next/document'

const Document = (): JSX.Element => {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='Gif gallery application to: view, share, browse, discover and download gifs.'
        />
        <meta content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
