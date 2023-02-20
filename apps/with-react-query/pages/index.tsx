import Pokemon from './pokemon'
import { IPokemon } from '../types'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { getAllPokemons } from 'service/pokemonService'

export default function Web() {
  const { data: pokemons } = useQuery('pokemons', getAllPokemons, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
  return (
    <>
      <Pokemon pokemons={pokemons || []} />
    </>
  )
}

// const getPokemons = (): Promise<IPokemon[]> =>
//   fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json').then(
//     resp => resp.json(),
//   )
export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('pokemons', getAllPokemons)
  return {
    props: {
      dehydratredState: dehydrate(queryClient),
    },
  }
}
