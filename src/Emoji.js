import React from 'react'

export default ({label, emoji}) => (
  <span role="img" aria-label={label}>
    {emoji}
  </span>
)
