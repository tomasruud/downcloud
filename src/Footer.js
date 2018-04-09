import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

export default class Footer extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col className='bg-light p-5 mt-4' lg={4}>
            <a href='https://soundcloud.com/autodrums' target='_blank' rel='noopener noreferrer'>Follow 👉 @autodrums</a><br />
            <a href='https://github.com/tomasruud/downcloud/issues' target='_blank' rel='noopener noreferrer'>Report issues on GitHub 🐛</a>
            <p className='text-muted mt-3 mb-0'><span role='img' aria-label='Photo'>📸</span> by <a href='https://unsplash.com/photos/HU-uL54pfQI' target='_blank' rel='noopener noreferrer'>Juja Han on Unsplash</a></p>
          </Col>
        </Row>
      </Container>
    )
  }
}
