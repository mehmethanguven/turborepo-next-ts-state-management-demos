import { useMemo, useState } from 'react'
import { IPokemon } from '../types'
import { atom, useAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'

const pokemonsAtom = atom<IPokemon[]>([])

const filterAtom = atom('')

const filteredPokemonsAtom = atom(get =>
  get(pokemonsAtom)?.filter(pokemon =>
    pokemon.name.toLowerCase().includes(get(filterAtom).toLowerCase()),
  ),
)

export function usePokemons(pokemons: IPokemon[]) {
  useHydrateAtoms([[pokemonsAtom, pokemons]] as const)
  const [filteredPokemons] = useAtom(filteredPokemonsAtom)
  const [filter, setFilter] = useAtom(filterAtom)

  return { filter, setFilter, filteredPokemons }
}
