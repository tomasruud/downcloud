import React from 'react'
import {render} from 'react-snapshot'

import 'normalize.css'
import './global.module.css'

import App from './App'

render(<App />, document.getElementById('app'))
