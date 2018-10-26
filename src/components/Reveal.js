import React from 'react'
import PropTypes from 'prop-types'

import {link} from './Reveal.module.css'

const Reveal = ({label, children, ...props}) => (
  <details {...props}>
    <summary className={link}>{label}</summary>
    {children}
  </details>
)

Reveal.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default Reveal
