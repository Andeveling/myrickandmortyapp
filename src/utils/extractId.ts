import { baseUrl } from '@/redux'

export const extractId = (link: string, endpoint: string) => {
  const id = link.replace(`${baseUrl}${endpoint}`, '')
  return id
}
