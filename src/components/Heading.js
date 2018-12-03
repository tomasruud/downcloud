import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 1.6rem;
`

const H2 = styled.h2`
  font-size: 1.3rem;
`

const H3 = styled.h3`
  font-size: 1.15rem;
`

const map = {
  'h1': H1,
  'h2': H2,
  'h3': H3
}

const Heading = ({children, type, ...props}) => (
  <H1 as={map[type]} {...props}>
    {children}
  </H1>
)

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired
}

export default Heading
