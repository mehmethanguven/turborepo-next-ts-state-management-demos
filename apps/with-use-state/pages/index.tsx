import Pokemon from './pokemon'
import { IPokemon } from '../types'
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
  const resp = await fetch(
    'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
  )
  const pokemons: IPokemon[] = await resp.json()

  return {
    props: {
      pokemons,
    },
  }
}
