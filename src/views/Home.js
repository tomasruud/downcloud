import React, {useLayoutEffect} from 'react'
import {connect} from 'react-redux'

import {user} from '../selectors'
import {user as userActions} from '../actions'
import {
  Emoji,
  Heading,
  Link,
  Paragraph,
  Spinner,
  TextButton,
  TrackList
} from '../components'

const Home = ({isLoading, user, fetchUser}) => {
  useLayoutEffect(() => {
    if (!user) {
      fetchUser()
    }
  }, [user, fetchUser])

  if (isLoading || !user) {
    return (
      <React.Fragment>
        <Heading type="h1">
          Collecting info <Emoji label="spy" emoji="🔍" />
        </Heading>
        <Spinner />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Heading type="h1">
        Hey
        {!!user.permalink && ' ' + user.permalink}!{' '}
        <Emoji label="waving" emoji="👋" />
      </Heading>
      <Paragraph>
        Select what data you want to view from the menu below. You can also{' '}
        <TextButton as="button" onClick={window.location.reload}>
          sign out
        </TextButton>{' '}
        and try again with a different account.
      </Paragraph>

      <TrackList>
        <TextButton as={Link} to="/tracks">
          Tracks
        </TextButton>
        <TextButton as={Link} to="/user-data">
          User data
        </TextButton>
      </TrackList>
    </React.Fragment>
  )
}

const state = state => ({
  user: user.user(state),
  isLoading: user.loading(state)
})

const dispatch = dispatch => ({
  fetchUser: () => dispatch(userActions.get())
})

export default connect(
  state,
  dispatch
)(Home)
