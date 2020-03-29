import React, {useLayoutEffect} from 'react'
import {connect} from 'react-redux'
import multiDownload from 'multi-download'

import {tracks} from '../selectors'
import {tracks as trackActions} from '../actions'
import {
  Heading,
  Link,
  Paragraph,
  Spinner,
  TextButton,
  TrackList
} from '../components'

const Tracks = ({tracks, isLoading, fetchTracks}) => {
  useLayoutEffect(() => {
    if (!tracks) {
      fetchTracks()
    }
  }, [tracks, fetchTracks])

  if (isLoading) {
    return (
      <React.Fragment>
        <Heading type="h1">Loading your tracks</Heading>
        <Spinner />
      </React.Fragment>
    )
  }

  const header = (
    <React.Fragment>
      <TextButton as={Link} to="/" style={{marginBottom: '1rem'}}>
        Back
      </TextButton>
      <Heading type="h1">Your tracks</Heading>
    </React.Fragment>
  )

  if (!tracks || tracks.length < 1) {
    return (
      <React.Fragment>
        {header}
        <Paragraph>Could not find any tracks</Paragraph>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {header}
      <Paragraph>Click on a track name to start downloading.</Paragraph>
      <Paragraph>
        If you're feeling lucky, you can try to{' '}
        <TextButton
          onClick={(e) => {
            e.preventDefault()
            multiDownload(tracks.map((t) => t.download))
          }}
        >
          download all tracks at once
        </TextButton>
        . Please note that this feature is experimental and may not work! If
        you're using Chrome, try disabling the option "Ask where to save each
        file before downloading" if it's not working properly.
      </Paragraph>

      <TrackList>
        {tracks.map((t, i) => (
          <TextButton key={i} href={t.download} external>
            {t.title}
          </TextButton>
        ))}
      </TrackList>
    </React.Fragment>
  )
}

const mapState = (state) => ({
  tracks: tracks.all(state),
  isLoading: tracks.loading(state)
})

const mapDispatch = (dispatch) => ({
  fetchTracks: () => dispatch(trackActions.get())
})

export default connect(mapState, mapDispatch)(Tracks)
