import React from 'react'
import PropTypes from 'prop-types'

import {h1, h2} from './Heading.module.css'

const classes = {h1, h2}

const Heading = ({children, type: Type, ...props}) => (
  <Type className={classes[Type]} {...props}>
    {children}
  </Type>
)

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired
}

export default Heading
