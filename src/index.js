import React from 'react'
import {render} from 'react-snapshot'
import App from './App'
import theme from './theme'

theme.injectStyles()

render(<App />, document.getElementById('app'))
