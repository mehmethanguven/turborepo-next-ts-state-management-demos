import pokemonSlice from './pokemon-slice'
import { Action, AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { IPokemon } from 'ui/types'
import { getAllPokemons, getPokemon } from 'service/pokemonService'

export const pokemonActions = pokemonSlice.actions

export const fetchPokemons = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().pokemon.pokemons.length === 0) {
      const response: IPokemon[] = await getAllPokemons()
      dispatch(pokemonActions.setPokemons(response))
    }
  }
}
export const fetchPokemon = (
  pokemon_id: number,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(pokemonActions.setLoading(true))
    const response: IPokemon = await getPokemon(pokemon_id)
    dispatch(pokemonActions.setPokemon(response))
    dispatch(pokemonActions.setLoading(false))
  }
}

export const filterPokemons = (
  filter: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return dispatch => {
    dispatch(pokemonActions.setSearch(filter))
  }
}
