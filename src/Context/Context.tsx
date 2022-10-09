import { darkTheme, lightTheme } from '@/Theme'
import { NextUIProvider } from '@nextui-org/react'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

export interface ContextI {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
}
export const Context = createContext<ContextI | null>(null)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ContextProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(false)

  const values: ContextI = { isDark, setIsDark }
  return (
    <Context.Provider value={values}>
      <NextUIProvider theme={isDark ? darkTheme : lightTheme}>{children}</NextUIProvider>
    </Context.Provider>
  )
}
