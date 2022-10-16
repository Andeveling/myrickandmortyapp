import { CharacterI } from '@/types'

type status = CharacterI['status'] | CharacterI['species'] | string

export const selectColorBadge = (value: status) => {
  switch (value) {
    case 'Alive':
    case 'Alien':
      return 'success'
    case 'Dead':
      return 'error'
    case 'Human':
    default:
      return 'default'
  }
}
