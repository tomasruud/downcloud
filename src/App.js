import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import Footer from './Footer'
import Login from './Login'
import List from './List'
import Spinner from './Spinner'

import Soundcloud from './soundcloud'
import FakeSoundcloud from './soundcloud.local'

class App extends Component {
  constructor (props) {
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

  async fetchTracks () {
    const token = await this.service.authenticate()
    this.setState({accessToken: token})

    const tracks = await this.service.getAllTracksForUser()
    this.setState({tracks: tracks, tracksFetched: true})
  }

  render () {
    return [
      <Container key='content'>
        <Row>
          <Col className='bg-light p-5 mt-sm-5' lg='auto'>
            {!this.state.accessToken && <Login onLoginClick={this.fetchTracks} />}
            {this.state.accessToken && !this.state.tracksFetched && <Spinner key='spinner' />}
            {this.state.tracksFetched && <List tracks={this.state.tracks} />}
          </Col>
        </Row>
      </Container>,
      <Container key='footer'>
        <Row>
          <Col className='bg-light p-5 mt-4 mb-sm-5' lg='auto'>
            <Footer />
          </Col>
        </Row>
      </Container>
    ]
  }
}

export default App
