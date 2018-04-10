import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

export default class Login extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col className='bg-light p-5 mt-sm-5' lg={6}>
            <h1>Hello!</h1>
            <p className='lead'>This site helps you download your own Souncloud tracks as original, uncompressed files.</p>
            <p>Press the button below to continue. <span role='img' aria-label='Hand pointing down'>👇</span></p>
            <Button color='primary' size='lg' onClick={this.props.onLoginClick}>Sign in with Soundcloud</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
