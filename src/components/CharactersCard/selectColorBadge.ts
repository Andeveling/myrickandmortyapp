export const selectColorBadge = (status: string) => {
  switch (status) {
    case 'Alive':
      return 'success'
    case 'Dead':
      return 'error'
    case 'Alien':
      return 'success'
    case 'Human':
      return 'default'
    default:
      return 'default'
  }
}
