import React, {Fragment} from 'react'
import multiDownload from 'multi-download'

import { Emoji, TrackList, Paragraph, TextButton, Heading} from '../components'

export default ({tracks}) => {
  if (tracks && tracks.length > 0) {
    return (
      <Fragment>
        <Paragraph>
          Click on a track name to start downloading, or refresh the page to try
          again.
        </Paragraph>
        <Paragraph>
          Alternatively you can{' '}
          <TextButton
            onClick={e => {
              e.preventDefault()
              multiDownload(tracks.map(t => t.url))
            }}
            href="/"
          >
            download all
          </TextButton>{' '}
          tracks. (This feature is experimental and may not work)
        </Paragraph>
        <Heading type="h2">
          {tracks.length} track{tracks.length !== 1 && 's'}
        </Heading>
        <TrackList tracks={tracks} />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Paragraph>
        Could not find any tracks <Emoji label="sad" emoji="😢" />
        <br />
        Refresh the page to try again.
      </Paragraph>
    </Fragment>
  )
}
