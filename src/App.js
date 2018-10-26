import React from 'react'
import {connect} from 'react-redux'
import {HashRouter, Route, Redirect, withRouter} from 'react-router-dom'

import Layout from './Layout'
import {Login, Data} from './views'

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
  <HashRouter>
    <Layout>
      <TokenRoute exact path="/" component={Data} />
      <Route path="/sign-in" component={Login} />
    </Layout>
  </HashRouter>
)

export default App
