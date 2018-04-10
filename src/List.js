import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

export default class List extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col className='bg-light p-5 mt-sm-5' lg='auto'>
            Hello
          </Col>
        </Row>
      </Container>
    )
  }
}