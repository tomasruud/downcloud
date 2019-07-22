import React from 'react'
import {connect} from 'react-redux'

import {router, session} from './selectors'
import {Home, Login, Tracks, UserData} from './views'

const Router = ({path, isAuthenticated}) => {
  if (isAuthenticated) {
    switch (path) {
      case '/user-data':
        return <UserData />

      case '/tracks':
        return <Tracks />

      case '/dashboard':
      default:
        return <Home />
    }
  }

  return <Login />
}

const select = state => ({
  path: router.path(state),
  isAuthenticated: session.authenticated(state)
})

export default connect(select)(Router)
