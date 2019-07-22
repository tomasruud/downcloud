import React from 'react'
import {connect} from 'react-redux'

import {session as sessionActions} from '../actions'
import {session} from '../selectors'
import {Button, Emoji, Heading, Paragraph, Spinner} from '../components'

const Login = ({isLoading, onLoginClick}) => {
  if (isLoading) {
    return (
      <React.Fragment>
        <Heading type="h1">
          Signing you in <Emoji label="investigating" emoji="🕵️‍" />
        </Heading>
        <Spinner />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Heading type="h1">
        Downcloud <Emoji label="Music note" emoji="🎶" />
      </Heading>
      <Paragraph>
        This app helps you download your own Souncloud tracks as original,
        uncompressed files.
      </Paragraph>
      <Button onClick={onLoginClick}>
        <Emoji label="Key" emoji="🔑" /> Sign in with Soundcloud
      </Button>{' '}
      to get started
    </React.Fragment>
  )
}

const mapState = state => ({
  isLoading: session.loading(state)
})

const mapDispatch = dispatch => ({
  onLoginClick: () => dispatch(sessionActions.authenticate())
})

export default connect(
  mapState,
  mapDispatch
)(Login)
