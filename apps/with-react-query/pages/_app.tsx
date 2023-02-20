import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import Layout from 'ui/components/layout'
import '../styles/global.css'
import { headerNavLinks } from '../data'

export const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout headerNavLinks={headerNavLinks} title="Next with react query">
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
