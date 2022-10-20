import { darkTheme, lightTheme } from '@/Theme'
import { NextUIProvider } from '@nextui-org/react'
import { createContext, Dispatch, SetStateAction, useState, PropsWithChildren } from 'react'

export interface ContextI {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}
export const Context = createContext<ContextI | null>(null)

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const values: ContextI = { isDark, setIsDark, currentPage, setCurrentPage }
  return (
    <Context.Provider value={values}>
      <NextUIProvider theme={isDark ? darkTheme : lightTheme}>{children}</NextUIProvider>
    </Context.Provider>
  )
}
