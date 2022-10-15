/* eslint-disable no-use-before-define */
export interface CharacterI {
  id: number | string
  name: string
  status: StatusE
  species: SpeciesE
  type: string
  gender: GenderE
  origin: LocationI
  location: LocationI
  image: string
  episode: string[]
  url: string
  created: Date
}

export interface PropsI {
  children?: JSX.Element | JSX.Element[]
}

export interface InfoI {
  count: number
  pages: number
  next: string
  prev: null
}
export interface PageI {
  info: InfoI
  results: CharacterI[]
}
export enum GenderE {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface LocationI {
  name: string
  url: string
}

export enum SpeciesE {
  Alien = 'Alien',
  Human = 'Human',
}

export enum StatusE {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
