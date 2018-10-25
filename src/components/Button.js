import React from 'react'
import PropTypes from 'prop-types'
import { button } from './Button.module.css'

const Button = ({ tag: Tag, children, ...props }) => (
  <Tag className={button} {...props}>
    {children}
  </Tag>
)

Button.propTypes = {
  tag: PropTypes.string.isRequired
}

Button.defaultProps = {
  tag: 'button'
}

export default Button
