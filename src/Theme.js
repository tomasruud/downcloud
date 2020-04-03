import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {Normalize} from 'styled-normalize'

const t = {
  primary: '#c43c00',
  light: '#fff',
  dark: '#000',
  lightTint: '#fff5ed',
  gray: '#ddd'
}

const Global = createGlobalStyle`
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
    background-color: ${props => props.theme.lightTint};
    padding: 0 1rem;
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
