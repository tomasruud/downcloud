import React from 'react'
import {connect} from 'react-redux'
import {
  MemoryRouter as Router,
  Redirect,
  Route,
  withRouter
} from 'react-router-dom'

import Layout from './Layout'
import {Home, Login, Tracks, UserData} from './views'

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
      <TokenRoute path="/user-data" component={UserData} />
    </Layout>
  </Router>
)

export default App
