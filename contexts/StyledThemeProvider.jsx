import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/styled-components-theme'

const StyledThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledThemeProvider
