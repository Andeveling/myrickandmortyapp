import { createTheme } from '@nextui-org/react'

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      error: '#fe4454',
      success: '#1cd82c',
    },
  },
})

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      error: '#fe4454',
      success: '#1cd82c',
      background: '$accents0',
    },
  },
})
