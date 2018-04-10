import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

export default class List extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col className='bg-light p-5 mt-sm-5' lg='auto'>
            {(!this.props.tracks || !this.props.tracks.length) && (
              <p>No tracks <span role='image' aria-label='sad'>😢</span></p>)}

            {(this.props.tracks && this.props.tracks.length) && (
              <ul>
                {this.props.tracks.map((track, index) => (
                  <li key={index}>
                    <a href={track.url}>{track.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}