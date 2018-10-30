import React from 'react'
import {connect} from 'react-redux'

import {fetchUser} from '../actions'
import {
  Emoji,
  Paragraph,
  TextButton,
  Heading,
  Spinner
} from '../components'

class Home extends React.Component {
  refresh() {
    window.location.reload()
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const {user, userLoading} = this.props

    if (userLoading) {
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
          <TextButton tag="button" onClick={this.refresh}>
            sign out
          </TextButton>{' '}
          and try again with a different account.
        </Paragraph>
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  user: state.user.entity,
  userLoading: state.user.isFetching
})

const mapDispatch = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(
  mapState,
  mapDispatch
)(Home)
