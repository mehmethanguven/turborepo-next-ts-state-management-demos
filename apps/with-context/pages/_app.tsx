import type { AppProps } from 'next/app'
import Layout from 'ui/components/layout'
import '../styles/global.css'
import { headerNavLinks } from '../data'
import { PokemonProvider } from 'store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider pokemons={pageProps.pokemons}>
      <Layout headerNavLinks={headerNavLinks} title="Next with context">
        <Component {...pageProps} />
      </Layout>
    </PokemonProvider>
  )
}

export default MyApp
