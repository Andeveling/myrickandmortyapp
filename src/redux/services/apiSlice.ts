import { CharacterI, PageI } from '@/types'
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
  }),
})

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = apiSlice
