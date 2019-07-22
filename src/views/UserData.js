import React, {useLayoutEffect} from 'react'
import {connect} from 'react-redux'

import {user} from '../selectors'
import {user as userActions} from '../actions'
import {Emoji, Heading, Link, Raw, Spinner, TextButton} from '../components'

const UserData = ({isLoading, user, fetchUser}) => {
  useLayoutEffect(() => {
    if (!user) {
      fetchUser()
    }
  }, [user, fetchUser])

  if (isLoading) {
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
      <TextButton as={Link} to="/" style={{marginBottom: '1rem'}}>
        <Emoji label="Back" emoji="◀️" /> Go back
      </TextButton>
      <Heading type="h1">Your user data</Heading>
      <Raw>{user}</Raw>
    </React.Fragment>
  )
}

const mapState = state => ({
  user: user.user(state),
  isLoading: user.loading(state)
})

const mapDispatch = dispatch => ({
  fetchUser: () => dispatch(userActions.get())
})

export default connect(
  mapState,
  mapDispatch
)(UserData)
