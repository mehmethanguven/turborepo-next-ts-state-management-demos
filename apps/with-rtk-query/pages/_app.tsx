import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import Layout from 'ui/components/layout'
import '../styles/global.css'
import { headerNavLinks } from '../data'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { pokemonApi } from 'store'

export const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={pokemonApi}>
      <Layout
        headerNavLinks={headerNavLinks}
        title="Next with redux toolkit query"
      >
        <Component {...pageProps} />
      </Layout>
    </ApiProvider>
  )
}

export default MyApp
