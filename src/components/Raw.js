import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Pre = styled.pre`
  font-size: 0.7rem;
  white-space: pre-wrap;
`

const Raw = ({children}) => {
  const data = JSON.stringify(children, null, 2)

  return (
    <Pre>
      <code>{data}</code>
    </Pre>
  )
}

Raw.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
}

export default Raw
