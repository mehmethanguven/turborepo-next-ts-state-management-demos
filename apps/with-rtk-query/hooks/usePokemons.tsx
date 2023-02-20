import { useMemo, useState } from 'react'
import { IPokemon } from '../types'

export function usePokemons(pokemons: IPokemon[]) {
  const [filter, setFilter] = useState('')

  const filteredPokemons = useMemo(
    () =>
      pokemons?.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    [filter, pokemons],
  )

  return { filter, setFilter, filteredPokemons }
}
