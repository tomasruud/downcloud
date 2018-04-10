import React, { Component } from 'react'

import Footer from './Footer'
import Login from './Login'
import List from './List'

const SC = require('soundcloud')

class App extends Component {
  constructor (props) {
    super(props)

    this.apiBase = 'https://api.soundcloud.com'
    this.redirectUri = 'https://downcloud.ruud.ninja/callback.html'
    this.clientId = 'c205c3e2eedb509dff1c1147765b055d'
    this.pageSize = 200

    this.state = {
      accessToken: null,
      tracks: []
    }

    this.authenticateWithSoundcloud = this.authenticateWithSoundcloud.bind(this)
    this.fetchTracks = this.fetchTracks.bind(this)
    this.fetch = this.fetch.bind(this)
  }

  componentDidMount () {
    console.log('Mounted')

    SC.initialize({
      client_id: this.clientId,
      redirect_uri: this.redirectUri
    })
  }

  authenticateWithSoundcloud () {
    SC.connect().then(session => {
      console.log('Connected')

      this.setState({
        accessToken: session.oauth_token
      })

      console.log('Session set')

      this.fetchTracks()
    })
  }

  fetchTracks () {
    console.log('Fetching tracks')

    SC.get('/me/tracks', {
      limit: this.pageSize,
      linked_partitioning: 1
    }).then(tracks => this.fetch(tracks))
  }

  fetch (tracks) {
    console.log('Got tracks')
    console.dir(tracks)
    let newTracks = []

    tracks.collection.forEach(track =>
      newTracks.push({
        title: track.title,
        url: track.download_url + '?oauth_token=' + this.state.accessToken
      })
    )

    this.setState(prev => ({tracks: [...prev.tracks, newTracks]}))

    if (tracks.next_href) {
      let url = tracks.next_href.replace(this.apiBase, '')
      SC.get(url).then(tracks => this.fetch(tracks))
    }
  }

  render () {
    return [
      (!this.state.accessToken && <Login key='login' onLoginClick={this.authenticateWithSoundcloud} />),
      (this.state.accessToken && <List key='list' tracks={this.props.tracks} />),
      <Footer key='footer' />
    ]
  }
}

export default App
