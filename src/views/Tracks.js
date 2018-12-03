import React from 'react'
import {connect} from 'react-redux'
import multiDownload from 'multi-download'
import {Link} from 'react-router-dom'

import {fetchTracks} from '../actions'
import {
  Accordion,
  AccordionItem,
  Emoji,
  Heading,
  Paragraph,
  Raw,
  Spinner,
  TextButton,
  TrackList
} from '../components'

class Tracks extends React.Component {
  componentDidMount() {
    if (!this.props.tracksSet) {
      this.props.fetchTracks()
    }
  }

  render() {
    const {tracks, isLoading} = this.props

    if (isLoading) {
      return (
        <React.Fragment>
          <Heading type="h1">
            Loading your tracks <Emoji label="hourglass" emoji="⏳" />
          </Heading>
          <Spinner />
        </React.Fragment>
      )
    }

    const header = (
      <React.Fragment>
        <TextButton tag={Link} to="/" style={{marginBottom: '1rem'}}>
          <Emoji label="Back" emoji="◀️" /> Go back
        </TextButton>
        <Heading type="h1">Your tracks</Heading>
      </React.Fragment>
    )

    if (!tracks || tracks.length < 1) {
      return (
        <React.Fragment>
          {header}
          <Paragraph>
            Could not find any tracks <Emoji label="sad" emoji="😢" />
          </Paragraph>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        {header}
        <Accordion>
          <AccordionItem
            title={'Downloads (' + tracks.length + ')'}
            open={true}
          >
            <Paragraph>Click on a track name to start downloading.</Paragraph>
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
              <Emoji label="wondering" emoji="🤷" /> From my personal
              experience, Microsoft Edge seems to work best.
            </Paragraph>

            <TrackList>
              {tracks.map((t, i) => (
                <TextButton key={i} href={t.download} external>
                  {t.title}
                </TextButton>
              ))}
            </TrackList>
          </AccordionItem>

          <AccordionItem title="Raw data">
            <Raw>{tracks}</Raw>
          </AccordionItem>
        </Accordion>
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  tracks: state.tracks.collection,
  isLoading: state.tracks.isFetching,
  tracksSet: state.tracks.isSet
})

const mapDispatch = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks())
})

export default connect(
  mapState,
  mapDispatch
)(Tracks)
