import { useState, useMemo, createContext, useContext } from 'react'
import { getAllPokemons } from 'service/pokemonService'
import { IPokemon } from '../types'

export async function getServerSideProps() {
  // const resp = await fetch(
  //   'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
  // )
  return {
    props: {
      pokemons: await getAllPokemons(),
    },
  }
}

const usePokemonController = (pokemons: IPokemon[]) => {
  const [filter, setFilter] = useState('')

  const filteredPokemon = useMemo(
    () =>
      pokemons?.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    [filter, pokemons],
  )

  return {
    filter,
    setFilter,
    pokemons: filteredPokemon,
  }
}

const PokemonContext = createContext<ReturnType<typeof usePokemonController>>({
  filter: '',
  setFilter: () => {},
  pokemons: [],
})

type Props = {
  pokemons: IPokemon[]
  children: any
}

export const PokemonProvider = ({ pokemons, children }: Props) => (
  <PokemonContext.Provider value={usePokemonController(pokemons)}>
    {children}
  </PokemonContext.Provider>
)

export const usePokemon = () => useContext(PokemonContext)
