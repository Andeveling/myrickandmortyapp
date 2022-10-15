import { CharacterI, EpisodeI, PageI } from '@/types'
import { createSelector } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<PageI, number>({
      query: (page) => `character/?page=${page}`,
    }),
    getCharacterById: builder.query<CharacterI, string | number>({
      query: (id) => `character/${id}`,
    }),
    getEpisodeById: builder.query<EpisodeI, string | number>({
      query: (id) => `episode/${id}`,
    }),
  }),
})

export const { useGetCharactersQuery, useGetCharacterByIdQuery, useGetEpisodeByIdQuery } = apiSlice
