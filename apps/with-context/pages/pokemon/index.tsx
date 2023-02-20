import { useEffect } from 'react'
import { usePokemon } from 'store'
import { PokemonFilter, PokemonList } from 'ui'

const Pokemon = () => {
  const { filter, setFilter, pokemons } = usePokemon()
  return (
    <div>
      <PokemonFilter filter={filter} setFilter={setFilter} />
      <PokemonList filteredPokemons={pokemons} />
    </div>
  )
}
export default Pokemon
