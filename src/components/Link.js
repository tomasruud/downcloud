import React from 'react'
import {connect} from 'react-redux'

import Base from './TextButton'
import {router} from '../actions'

const Link = ({as: Component, to, navigateTo, ...rest}) => (
  <Component
    as="button"
    onClick={(e) => {
      e.preventDefault()
      navigateTo(to)
    }}
    {...rest}
  />
)

Link.defaultProps = {
  as: Base
}

const actions = (dispatch) => ({
  navigateTo: (path) => dispatch(router.navigate(path))
})

export default connect(null, actions)(Link)
