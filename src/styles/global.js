import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.text};
  }
  body {
    background-color: ${props => props.theme.colors.background};
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }
`
