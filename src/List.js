import React, {Fragment} from 'react'
import multiDownload from 'multi-download'

import Emoji from './Emoji'
import './list.css'

export default ({tracks, onLogOut}) => {
  if (tracks && tracks.length > 0) {
    return (
      <Fragment>
        <p>
          Click on a track name to start downloading, or{' '}
          <a onClick={onLogOut} href="#">sign out</a> to try again.
        </p>
        <p>
          Alternatively you can{' '}
          <a onClick={() => multiDownload(tracks.map(t => t.url))} href="#">
            download all
          </a>{' '}
          tracks. (This feature is experimental and may not work)
        </p>
        <h2>
          {tracks.length} track{tracks.length !== 1 && 's'}
        </h2>
        <ul className="list">
          {tracks.map((track, index) => (
            <li key={index}>
              <a href={track.url}>{track.title}</a>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <p>
        Could not find any tracks <Emoji label="sad" emoji="😢" />
      </p>
      <p>
        <a onClick={onLogOut} href="#">Sign out</a> and try again?
      </p>
    </Fragment>
  )
}
