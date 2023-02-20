import { usePokemons } from '@/hooks/usePokemons'
import { IPokemon } from '@/types'
import { useEffect } from 'react'
import { usePokemonStore } from 'store'
import { PokemonFilter, PokemonList } from 'ui'

type Props = {
  pokemons: IPokemon[]
}

const Pokemon = ({ pokemons }: Props) => {
  const { filter, setFilter, filteredPokemons } = usePokemonStore()

  useEffect(() => {
    let isMount = true
    if (isMount) {
      usePokemonStore.getState().setPokemons(pokemons)
    }

    return () => {
      isMount = false
    }
  }, [])

  return (
    <div>
      <PokemonFilter filter={filter} setFilter={setFilter} />
      <PokemonList filteredPokemons={filteredPokemons} />
    </div>
  )
}
export default Pokemon
