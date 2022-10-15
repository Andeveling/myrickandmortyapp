import { createTheme, Theme } from '@nextui-org/react'

export const lightTheme: Theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      error: '#fe4454',
      success: '#1cd82c',
    },
  },
})

export const darkTheme: Theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      error: '#fe4454',
      success: '#1cd82c',
      background: '$accents0',
    },
  },
})
