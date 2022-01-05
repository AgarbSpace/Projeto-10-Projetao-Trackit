import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    
}

body{
    font-family: 'Lexend Deca';
    font-style: normal;
    width: 375px;
}

`

export default GlobalStyle;