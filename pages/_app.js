import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="BOX101 - Oficina mecânica dedicada a todos os tipos de viaturas. Serviço de qualidade e confiança para o seu automóvel." />
        <meta property="og:title" content="BOX101 - A Sua Oficina de Confiança" />
        <meta property="og:description" content="BOX101 - Oficina mecânica dedicada a todos os tipos de viaturas. Serviço de qualidade e confiança para o seu automóvel." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BOX101" />
        <meta property="og:locale" content="pt_PT" />
        <title>BOX101 - A Sua Oficina de Confiança</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}