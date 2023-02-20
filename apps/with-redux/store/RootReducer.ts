import { combineReducers } from 'redux'
import pokemonSlice from './reducers/pokemon-slice'

export const rootReducer = combineReducers({
  pokemon: pokemonSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
