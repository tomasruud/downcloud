import React, { Component } from 'react'

import Footer from './Footer'
import Login from './Login'

class App extends Component {
  render () {
    return [
      <Login key='login' />,
      <Footer key='footer' />
    ]
  }
}

export default App
