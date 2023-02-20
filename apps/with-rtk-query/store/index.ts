import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPokemon } from '../types'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jherr-pokemon.s3.us-west-1.amazonaws.com',
  }),
  tagTypes: ['Pokemons'],
  endpoints: builder => ({
    getPokemons: builder.query<IPokemon[], void>({
      query: () => `index.json`,
      providesTags: [{ type: 'Pokemons', id: 'LIST' }],
    }),
  }),
})
