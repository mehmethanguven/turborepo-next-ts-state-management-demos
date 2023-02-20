import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IPokemon } from '../../types'

export type PokemonState = {
  pokemons: IPokemon[]
  pokemon: IPokemon | undefined
  search: string
  filteredPokemons: IPokemon[]
  loading: boolean
  error: boolean
  filter: string
  setFilter: () => void
}

const initialState: PokemonState = {
  pokemons: [],
  pokemon: undefined,
  filteredPokemons: [],
  search: '',
  loading: false,
  error: false,
  filter: '',
  setFilter: () => [],
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<IPokemon[]>) {
      state.pokemons = action.payload
      state.filteredPokemons = action.payload
    },
    setPokemon(state, action: PayloadAction<IPokemon>) {
      state.pokemon = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
      state.filteredPokemons = state.pokemons.filter(({ name }) =>
        name.toLowerCase().includes(state.search.toLowerCase()),
      )
    },
  },
})

export default pokemonSlice
