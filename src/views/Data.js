import React from 'react'
import {connect} from 'react-redux'
import multiDownload from 'multi-download'

import {fetchTracks, fetchUser} from '../actions'
import {
  Emoji,
  TrackList,
  Paragraph,
  TextButton,
  Heading,
  Button,
  Spinner
} from '../components'

class Data extends React.Component {
  refresh() {
    window.location.reload()
  }

  componentDidMount() {
    this.props.fetchTracks()
    this.props.fetchUser()
  }

  render() {
    const {isFetching, tracks, user} = this.props

    if (isFetching) {
      return (
        <React.Fragment>
          <Heading type="h1">
            Finding your data... <Emoji label="locating" emoji="🔍" />
          </Heading>
          <Spinner />
        </React.Fragment>
      )
    }

    if (tracks && tracks.length > 0) {
      return (
        <React.Fragment>
          <Heading type="h1">
            Hey
            {!!user.permalink && ' ' + user.permalink}!{' '}
            <Emoji label="waving" emoji="👋" />
          </Heading>
          <Paragraph>
            Click on a track name to start downloading. You can also{' '}
            <TextButton tag="button" onClick={this.refresh}>
              log out
            </TextButton>{' '}
            and try again.
          </Paragraph>
          <Paragraph>
            If you're feeling lucky, you can try to{' '}
            <TextButton
              onClick={e => {
                e.preventDefault()
                multiDownload(tracks.map(t => t.download))
              }}
            >
              download all tracks at once
            </TextButton>
      . Please note that this feature is experimental and may not work!{' '}
            <Emoji label="wondering" emoji="🤷" />
            {' '}From my personal experience, Microsoft Edge seems to work best.
          </Paragraph>
          <Heading type="h2">
            {tracks.length} track
            {tracks.length !== 1 && 's'}
          </Heading>
          <TrackList
            elements={tracks.map(track => (
              <TextButton href={track.download} external>
                {track.title}
              </TextButton>
            ))}
          />
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <Heading type="h1">Ouch!</Heading>
        <Paragraph>
          Could not find any tracks <Emoji label="sad" emoji="😢" />
        </Paragraph>
        <Button onClick={this.refresh}>Try again</Button> (or refresh the page)
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  isFetching: state.tracks.isFetching,
  tracks: state.tracks.collection,
  user: state.user
})

const mapDispatch = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchUser: () => dispatch(fetchUser())
})

export default connect(
  mapState,
  mapDispatch
)(Data)
