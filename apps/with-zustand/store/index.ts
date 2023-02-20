import { create } from 'zustand'
import { IPokemon } from '../types'

export const usePokemonStore = create<{
  pokemons: IPokemon[]
  setPokemons: (pokemons: IPokemon[]) => void
  filteredPokemons: IPokemon[]
  filter: string
  setFilter: (filter: string) => void
}>(set => ({
  pokemons: [],
  filteredPokemons: [],
  filter: '',
  setPokemons: (pokemons: IPokemon[]) =>
    set({ pokemons, filteredPokemons: pokemons }),
  setFilter: (filter: string) =>
    set(state => ({
      filter,
      filteredPokemons: state.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    })),
}))
