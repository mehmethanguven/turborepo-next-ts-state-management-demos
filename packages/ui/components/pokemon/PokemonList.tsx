import { IPokemon } from '../../types'
import { ListItem } from './ListItem'

type Props = {
  filteredPokemons: IPokemon[]
}
export const PokemonList = ({ filteredPokemons }: Props) => {
  return (
    <>
      {!filteredPokemons ||
      (filteredPokemons && filteredPokemons.length === 0) ? (
        <div className="flex items-center justify-center h-64 text-2xl md:grid-cols-1">
          <h1>No pokemon found</h1>
        </div>
      ) : (
        <div className="grid items-center justify-center grid-cols-1 gap-10 py-4 md:grid-cols-3">
          {filteredPokemons.slice(0, 20).map((item, idx) => (
            <ListItem key={idx} {...item} />
          ))}
        </div>
      )}
    </>
  )
}
