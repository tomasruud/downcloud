import React from 'react'
import {connect} from 'react-redux'
import multiDownload from 'multi-download'

import {fetchTracks} from '../actions'
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
  }

  render() {
    const {isFetching, tracks} = this.props

    if (isFetching) {
      return (
        <React.Fragment>
          <Heading type="h1">Loading your tracks..</Heading>
          <Spinner />
        </React.Fragment>
      )
    }

    if (tracks && tracks.length > 0) {
      return (
        <React.Fragment>
          <Heading type="h1">Hey!</Heading>
          <Paragraph>
            Click on a track name to start downloading. You can also{' '}
            <TextButton tag="button" onClick={this.refresh}>
              log out
            </TextButton>{' '}
            and try again.
          </Paragraph>
          <Paragraph>
            If you're feeling lucky, you can try to download all tracks at once.
            Please note that this feature is experimental and may not work!{' '}
            <Emoji label="wondering" emoji="🤷‍" />
          </Paragraph>
          <Button
            onClick={e => {
              e.preventDefault()
              multiDownload(tracks.map(t => t.download))
            }}
          >
            Download all
          </Button>
          <Heading type="h2">
            {tracks.length} track
            {tracks.length !== 1 && 's'}
          </Heading>
          <TrackList
            elements={tracks.map(track => (
              <TextButton href={track.download}>{track.title}</TextButton>
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
  tracks: state.tracks.collection
})

const mapDispatch = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks())
})

export default connect(
  mapState,
  mapDispatch
)(Data)
