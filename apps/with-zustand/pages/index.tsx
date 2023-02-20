import Pokemon from './pokemon'
import { IPokemon } from '../types'

import { create } from 'zustand'
import { getAllPokemons } from 'service/pokemonService'

type Props = {
  pokemons: IPokemon[]
}

export default function Web({ pokemons }: Props) {
  return <Pokemon pokemons={pokemons} />
}
const usePokemonStore = create<{
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

export async function getServerSideProps() {
  // const resp = await fetch(
  //   'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
  // )

  usePokemonStore.getState().setPokemons(await getAllPokemons())

  return {
    props: {
      pokemons: usePokemonStore.getState().pokemons,
    },
  }
}
