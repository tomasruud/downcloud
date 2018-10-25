import React, { Component } from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Layout from './Layout';
import {Login, List} from './views'

import Soundcloud from './services/soundcloud'
import FakeSoundcloud from './services/soundcloud.local'

class App extends Component {
  constructor(props) {
    super(props)

    if (process.env.NODE_ENV === 'production') {
      this.service = new Soundcloud({
        redirectUri: 'https://downcloud.ruud.ninja/callback.html',
        clientId: 'c205c3e2eedb509dff1c1147765b055d'
      })
    } else {
      this.service = new FakeSoundcloud()
    }

    this.state = {
      accessToken: null,
      tracks: [],
      tracksFetched: false
    }

    this.fetchTracks = this.fetchTracks.bind(this)
  }

  async fetchTracks() {
    const token = await this.service.authenticate()
    this.setState({ accessToken: token })

    const tracks = await this.service.getAllTracksForUser()
    this.setState({ tracks: tracks, tracksFetched: true })
  }

  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tracks" component={List} />
        </Layout>
      </Router>
    )
  }
}

export default App
