import React from 'react'
import GlobalStyle from './styles/global'
import Navbar from './components/Navbar'

import Routes from './routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes />
    </>
  )
}

export default App
