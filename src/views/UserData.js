import React from 'react'
import {Emoji, Heading, Raw, Spinner, TextButton} from '../components'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser} from '../actions'

class UserData extends React.Component {
  componentDidMount() {
    if (!this.props.isSet && !this.props.isFetching) {
      this.props.fetchUser()
    }
  }

  render() {
    const {user, isFetching} = this.props

    if (isFetching) {
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
        <TextButton tag={Link} to="/" style={{marginBottom: '1rem'}}>
          <Emoji label="Back" emoji="◀️" /> Go back
        </TextButton>
        <Heading type="h1">Your user data</Heading>
        <Raw>{user}</Raw>
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  user: state.user.entity,
  isFetching: state.user.isFetching,
  isSet: state.user.isSet
})

const mapDispatch = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(
  mapState,
  mapDispatch
)(UserData)
