import React, {Component} from 'react'
import Footer from './Footer'
import Login from './Login'
import List from './List'
import Spinner from './Spinner'
import Emoji from './Emoji'
import Soundcloud from './soundcloud'
import FakeSoundcloud from './soundcloud.local'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.initializeSoundcloudService()

    this.state = {
      accessToken: null,
      tracks: [],
      tracksFetched: false
    }

    this.fetchTracks = this.fetchTracks.bind(this)
    this.initializeSoundcloudService = this.initializeSoundcloudService.bind(
      this
    )
  }

  initializeSoundcloudService() {
    if (process.env.NODE_ENV === 'production') {
      this.service = new Soundcloud({
        redirectUri: 'https://downcloud.ruud.ninja/callback.html',
        clientId: 'c205c3e2eedb509dff1c1147765b055d'
      })
    } else {
      this.service = new FakeSoundcloud()
    }
  }

  async fetchTracks() {
    const token = await this.service.authenticate()
    this.setState({accessToken: token})

    const tracks = await this.service.getAllTracksForUser()
    this.setState({tracks: tracks, tracksFetched: true})
  }

  render() {
    let content = <div />

    if (!this.state.accessToken) {
      content = <Login onLoginClick={this.fetchTracks} />
    } else {
      if (!this.state.tracksFetched) {
        content = <Spinner />
      } else {
        content = (
          <List
            tracks={this.state.tracks}
            onLogOut={e => {
              e.preventDefault()

              this.setState({
                accessToken: null,
                tracks: [],
                tracksFetched: false
              })

              this.initializeSoundcloudService()
            }}
          />
        )
      }
    }

    return (
      <div className="container">
        <header className="header">
          <h1>
            Downcloud <Emoji label="Hand waving" emoji="👋" />
          </h1>
        </header>
        <main className="main">{content}</main>
        <Footer />
      </div>
    )
  }
}

export default App
