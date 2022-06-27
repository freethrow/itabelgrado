import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="sr">
       <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&family=Roboto:wght@100;400;500&display=swap" rel="preconnect" />
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&family=Roboto:wght@100;400;500&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
              integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
              crossOrigin="true"/>


      <script async src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
   integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
   crossOrigin="true"></script>

<script async src="//static.getclicky.com/101371268.js"></script>


      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument