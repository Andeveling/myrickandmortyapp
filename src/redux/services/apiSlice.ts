import { CharacterI, EpisodeI, PageI } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseUrl = 'https://rickandmortyapi.com/api/'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
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
