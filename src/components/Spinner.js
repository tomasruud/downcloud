import React from 'react'
import 'spinkit/css/spinners/2-double-bounce.css'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0;
`

const Ball = styled.div`
  background-color: ${props => props.theme.primary} !important;
`

export default () => (
  <Wrapper className="sk-double-bounce">
    <Ball className="sk-child" />
    <Ball className="sk-child sk-double-bounce2" />
  </Wrapper>
)
