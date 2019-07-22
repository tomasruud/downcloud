import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {Normalize} from 'styled-normalize'

const t = {
  primary: '#f92300',
  light: '#fff',
  dark: '#000',
  lightTint: '#faf5f5',
  gray: '#ddd'
}

const Global = createGlobalStyle`
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

const Theme = ({children}) => (
  <ThemeProvider theme={t}>
    <React.Fragment>
      <Normalize />
      <Global />
      {children}
    </React.Fragment>
  </ThemeProvider>
)

export default Theme
