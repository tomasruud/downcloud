import React from 'react'

export default function List ({tracks}) {
  let element = <p>Could not find any tracks <span role='img' aria-label='sad'>😢</span></p>

  if (tracks && tracks.length) {
    element = (
      <div>
        <h2>Your tracks ({tracks.length})</h2>
        <p>Click on a track name to start downloading.</p>
        <ul className='list-unstyled mb-0'>
          {tracks.map((track, index) => (
            <li key={index}>
              <a href={track.url}>{track.title}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return element
}
