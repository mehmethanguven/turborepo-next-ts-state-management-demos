import { useAppSelector } from '@/hooks/redux-hooks'
import { PokemonFilter, PokemonList } from 'ui'
import { useFilter } from '@/hooks/useFilter'

const Pokemon = () => {
  const { filteredPokemons, loading, error } = useAppSelector(
    state => state.pokemon,
  )

  const { filter, handleFilter } = useFilter()

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <PokemonFilter
        filter={filter}
        setFilter={(value: string) => handleFilter(value)}
      />
      <PokemonList filteredPokemons={filteredPokemons} />
    </div>
  )
}
export default Pokemon
