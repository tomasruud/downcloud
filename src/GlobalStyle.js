import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  ::selection {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.light};
  }
  
  html {
    font-size: 125%;
    line-height: 1.61;
  }
  
  body {
    color: ${props => props.theme.dark};
    font-family: 'Lato', sans-serif;
    overflow-y: scroll;
    background-color: ${props => props.theme.light};
  }
`
