import React from 'react'
import {connect} from 'react-redux'
import multiDownload from 'multi-download'

import {requestTracks} from '../actions';
import {
  Emoji,
  TrackList,
  Paragraph,
  TextButton,
  Heading,
  Button,
  Spinner
} from '../components'

class Tracks extends React.Component {
  componentDidMount() {
    this.props.fetchTracks()
  }

  render() {
    const {tracks, isLoading} = this.props

    if (isLoading) {
      return (
        <Spinner />
      )
    }

    if (!tracks || tracks.length < 1) {
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

    return (
      <React.Fragment>
        <Paragraph>
          Click on a track name to start downloading.
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
} 

const mapState = state => ({
  tracks: state.tracks.collection,
  isLoading: state.tracks.isFetching
})

const mapDispatch = dispatch => ({
  fetchTracks: () => dispatch(requestTracks())
})

export default connect(mapState, mapDispatch)(Tracks)
