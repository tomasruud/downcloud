import React from 'react'
import {connect} from 'react-redux'
import {
  MemoryRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

import Layout from './Layout'
import {Login, Home, Tracks} from './views'

const mapState = s => ({
  hasToken: !!s.accessToken.token
})

const TokenRoute = withRouter(
  connect(mapState)(({component: Component, hasToken, ...rest}) => (
    <Route
      {...rest}
      render={props =>
        hasToken ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    />
  ))
)

const App = () => (
  <Router>
    <Layout>
      <TokenRoute exact path="/" component={Home} />
      <Route path="/sign-in" component={Login} />
      <TokenRoute path="/tracks" component={Tracks} />
    </Layout>
  </Router>
)

export default App
