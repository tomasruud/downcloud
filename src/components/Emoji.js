import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({label, emoji}) => (
  <span role="img" aria-label={label}>
    {emoji}
  </span>
)

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
}

export default Emoji
