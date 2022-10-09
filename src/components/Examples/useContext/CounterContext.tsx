import { createContext } from 'react'
import { PropsI } from '@/types'

const CounterContext = createContext({})

export const CounterContextProvider = ({ children }: PropsI) => {
  const values = {
    // puede ser cualquier cosa
  }

  return <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
}
