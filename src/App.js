import React, { Component } from 'react'
import logo from './logo.svg'

class App extends Component {
  render () {
    return (
      <div>
        <header>
          <img src={logo} alt='logo' />
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
