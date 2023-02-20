import Pokemon from './pokemon'
import { IPokemon } from '../types'
import { atom, useAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { getAllPokemons } from 'service/pokemonService'
type Props = {
  pokemons: IPokemon[]
}

export default function Web({ pokemons }: Props) {
  return (
    <>
      <Pokemon pokemons={pokemons} />
    </>
  )
}

export const getServerSideProps = async () => {
  const pokemons: IPokemon[] = await getAllPokemons()

  return {
    props: {
      pokemons,
    },
  }
}
