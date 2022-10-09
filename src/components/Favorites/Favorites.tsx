import { useReducer } from 'react'
import { CharacterI } from '@/types'

export enum TypesPayload {
  ADD_TO_FAVORITE = 'ADD_TO_FAVORITE',
}
export interface FavoritesStateI {
  favorites: CharacterI[]
}

export interface FavoritesActionI {
  type: TypesPayload
  payload: CharacterI
}

const favoritesState: FavoritesStateI = {
  favorites: [],
}

const favoriteReducer = (state: FavoritesStateI, action: FavoritesActionI) => {
  switch (action.type) {
    case TypesPayload.ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    default:
      throw new Error()
  }
}

export const Favorites = () => {
  const [state, dispatch] = useReducer(favoriteReducer, favoritesState)

  return <div>{}</div>
}
