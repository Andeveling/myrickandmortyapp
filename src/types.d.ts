export interface CharacterI {
  id: number | string
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: Date
}

export interface PropsI {
  children?: JSX.Element | JSX.Element[]
}
