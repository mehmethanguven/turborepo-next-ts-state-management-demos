import Pokemon from './pokemon'
import { pokemonApi } from 'store'

export default function Web() {
  const { data: pokemons, error } = pokemonApi.useGetPokemonsQuery()
  return (
    <>
      <Pokemon pokemons={pokemons || []} />
    </>
  )
}
