import React from 'react'
import { render } from 'react-snapshot'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App'

render(<App />, document.getElementById('app'))
