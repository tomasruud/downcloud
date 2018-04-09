import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

export default class Login extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col className='bg-light p-5 mt-5' lg={6}>
            <h1>[downcloud]</h1>
            <p className='lead'>Download your own Souncloud tracks in the original, uncompressed format. 🤙</p>
            <p>Click the button below to continue. None of your data will be stored anywhere, everything is done in your local browser. 🙌</p>
            <Button color='primary' size='lg' className='mt-3'>Sign in with Soundcloud</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}