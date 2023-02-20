import type { AppProps } from 'next/app'
import Layout from 'ui/components/layout'
import '../styles/global.css'
import { headerNavLinks } from '../data'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout headerNavLinks={headerNavLinks} title="Next with zustand">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
