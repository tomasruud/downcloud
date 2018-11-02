import React from 'react'
import PropTypes from 'prop-types'
import {link} from './TextButton.module.css'

const TextButton = ({tag: Tag, external, children, ...props}) => {
  let target = {}

  if (external) {
    target = {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  }

  return (
    <Tag className={link} {...target} {...props}>
      {children}
    </Tag>
  )
}

TextButton.propTypes = {
  tag: PropTypes.any,
  external: PropTypes.bool,
  children: PropTypes.any.isRequired
}

TextButton.defaultProps = {
  external: false,
  tag: 'a'
}

export default TextButton
