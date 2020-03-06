import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import dark from './styles/themes/dark'

import Routes from './routes'

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
