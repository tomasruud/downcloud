import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Button, Emoji, Paragraph, Heading, Spinner} from '../components'
import {fetchAccessToken} from '../actions'

const Login = ({hasToken, isLoading, onLoginClick}) => {
  if (hasToken) {
    return <Redirect to="/" />
  }

  return (
    <React.Fragment>
      <Heading type="h1">
        Downcloud <Emoji label="Music note" emoji="🎵" />
      </Heading>
      <Paragraph>
        This site helps you download your own Souncloud tracks as original,
        uncompressed files.
      </Paragraph>
      {isLoading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Button onClick={onLoginClick}>
            <Emoji label="Key" emoji="🔑" /> Sign in with Soundcloud
          </Button>{' '}
          to get started
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

const mapState = state => ({
  hasToken: !!state.accessToken.token,
  isLoading: state.accessToken.isFetching
})

const mapDispatch = dispatch => ({
  onLoginClick: () => dispatch(fetchAccessToken())
})

export default connect(
  mapState,
  mapDispatch
)(Login)
