import { usePokemons } from '@/hooks/usePokemons'
import { IPokemon } from '@/types'
import { PokemonFilter, PokemonList } from 'ui'

type Props = {
  pokemons: IPokemon[]
}

const Pokemon = ({ pokemons }: Props) => {
  const { filter, setFilter, filteredPokemons } = usePokemons(pokemons)

  return (
    <div>
      <PokemonFilter filter={filter} setFilter={setFilter} />
      <PokemonList filteredPokemons={filteredPokemons} />
    </div>
  )
}
export default Pokemon
