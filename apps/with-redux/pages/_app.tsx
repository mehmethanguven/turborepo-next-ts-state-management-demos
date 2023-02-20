import type { AppProps } from 'next/app'
import Layout from 'ui/components/layout'
import '../styles/global.css'
import { headerNavLinks } from '../data'
import { Provider } from 'react-redux'
import store from 'store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout headerNavLinks={headerNavLinks} title="Next with redux">
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
